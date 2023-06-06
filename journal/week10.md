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

### Health-Check

### Certificates

## Diagram
We created a diagram of all the services deployed by the stacks and it shows how they interact with each others.
![Diagram](/journal/assets/cfn1_w10.png "Diagram")
