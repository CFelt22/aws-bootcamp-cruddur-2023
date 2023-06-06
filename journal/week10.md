# Week 10 — CloudFormation
This week was about deploying the AWS Services we used in the Bootcamp as Infrastructure as Code. We split different parts of the architecture in separate template files. This way we can have a better segmentation of the application. It's easier to deploy, troubleshoot and update. First we organized the files in the repo to have a directory for each templates. We created a .toml file to pass variables and parameters to the template files. Then, we created a bash script to create the change sets for each stacks. This way we needed to approve the changes before deployment. I had some minors issues with the health-check of the backend service, the certificate in the us-east-1 region and the hosted zone.

## Repo Structure
In the *AWS* directory of the repo, we created a *cfn* directory. Inside of it, we created a directory for *CloudFormation stack* and it contains at least a *.toml* file and a *template.yaml* file. the *template.yaml* is used to define all AWS resources used and their configurations. The *.toml* file is used to parse data to the stack.  
![Structure](/journal/assets/structure1_w10.png "Structure")

This is an example of a *.toml* file.
``` toml
[deploy]
bucket = ''
region = ''
stack_name = 'Crd'

[parameters]
ServiceStack = 'CrdSrvBackendFlask'
ClusterStack = 'CrdCluster'
GitHubBranch = 'prod'
GithubRepo = '/aws-bootcamp-cruddur-2023'
ArtifactBucketName = "codepipeline-cruddur-artifacts"
BuildSpec = 'backend-flask/buildspec.yml'
```

## Cloudformation templates
This section will explain briefly which resources the stack creates. I won't put pictures or code because some of the files are very long, but there is a link to every files used by the stacks.
![Stacks](/journal/assets/stacks1_w10.png "Stacks")

### Network
This stack is used to create the VPC, the Internet Gateway, 6 subnets (1 private and 1 public for each of the AZs), and route tables.
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/networking/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/networking/config.toml)

### Cluster
This stack is used to create the ECS Fargate Cluster, the Application Load Balancer and it's Security Group, the HTTP and the HTTPS Listeners, and the target groups for the Frontend and the Backend. 
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cluster/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cluster/config.toml)

### Database
This stack is used to create the RDS Instance, the Database Security Group and the Subnet Group. 
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/db/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/db/config.toml)

### Service - Backend
This stack is used to create the Fargate Service, the Task definition, the Execution and the Task role.
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/service/config.toml)

### DynamoDB
This stack is used to create the DynamoDB table, the Stream, and the Execution role. We used SAM to create the stack, but before we used it, we had to build, package and deploy the code. 
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/config.toml)  
[build](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/build-1)  
[package](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/package-2)  
[deploy](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/deploy-3)

### CI/CD
This stack is used to create the CI/CD pipeline. It uses CodeBuild and CodePipeline and CodeStar to pull the code from the *prod* branch of our repo.
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/template.yaml)
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/config.toml)
[codebuild.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/nested/codebuild.yaml)

### Frontend
This stack is used to create the CloudFront distribution, the S3 Bucket for the *www.* domain, the S3 Bucket for the naked domain and the Bucket Policy. At this step, I had some problems with the Certificate. There is more explainations in the next section.
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/frontend/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/frontend/config.toml)

## Troubleshooting
This week I had some minors bugs, but nothing too complicated. Since I was trying to catch up, I used Andrews's code from next week and I was following along instead of trying to type everything. I had a small problem with the health-check of the backend container and I had some problems with CloudFront. 

### Health-Check
The problem with the health-check was that it wasn't the right path in the backend-flask.json file. In my directory structure, I still have the */flask/* directory. Once I found this error, everything was working fine.
![backend-flask.json](/journal/assets/backendflask1_w10.png "backend-flask.json")  
[backend-flask.json](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/task-definitions/backend-flask.json)

### Certificates
When I first created the certificate in the us-east-1 region, I didn't included the *cruddur.cfelteau.ca* dns. I only created it for *\*.cruddur.cfeltea.ca*. I had an error that the certificate was not valid for the hosted zone and that it couldn't be added to the CloudFront distribution. I had to create a new certificate and remove the old one from the other CloudFront Distribution. It was creating a conflict with the stack. Since I don't have a hosted zone for *cruddur.cfelteau.ca*, I added a value in the *.toml* file for my hosted zone. After that, everything worked.
![toml](/journal/assets/tomlhosted1_w10.png "toml")

## Diagram
We created a diagram of all the services deployed by the stacks and it shows how they interact with each others. This is the diagram created for the stacks that we built during this week. I used the trial of Lucid Chart to create it. I had free tier limitations.
![Diagram](/journal/assets/cfn1_w10.png "Diagram")
