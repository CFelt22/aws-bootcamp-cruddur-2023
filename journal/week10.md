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
### Network
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/networking/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/networking/config.toml)

### Cluster
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cluster/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cluster/config.toml)

### Database
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/db/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/db/config.toml)

### Service - Backend
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/template.yaml)  
[task-definition.guard](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/task-definition.guard)  
[ecs-cluster.guard](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/ecs-cluster.guard)

### DynamoDB
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/template.yaml)  
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/config.toml)  
[build](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/build-1)  
[package](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/package-2)  
[deploy](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/ddb/deploy-3)

### CI/CD
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/template.yaml)
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/config.toml)
[codebuild.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/cicd/nested/codebuild.yaml)

### Frontend
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
We created a diagram of all the services deployed by the stacks and it shows how they interact with each others.
![Diagram](/journal/assets/cfn1_w10.png "Diagram")
