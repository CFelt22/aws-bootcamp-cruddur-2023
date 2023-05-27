# Week 10 — CloudFormation
This week was about deploying the AWS Services we used in the Bootcamp as Infrastructure as Code. We split different parts of the architecture in separate template files. This way we can have a better segmentation of the application. It's easier to deploy, troubleshoot and update. First we organized the files in the repo to have a directory for each templates. We created a .toml file to pass variables and parameters to the template files. Then, we created a bash script to create the change sets for each stacks. This way we needed to approve the changes before deployment. I had some minors issues with the health-check of the backend service, the certificate in the us-east-1 region and the hosted zone.

## Repo Structure
We created a *cfn* directory in the *aws* directory of the repo. Each of the directories contains at least a *.toml* file and a *template.yaml* file.
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

## Troubleshooting
