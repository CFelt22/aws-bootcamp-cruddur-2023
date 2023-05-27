# Week 10 — CloudFormation
This week was about deploying the AWS Services we used in the Bootcamp as Infrastructure as Code. We split different parts of the architecture in separate template files. This way we can have a better segmentation of the application. It's easier to deploy, troubleshoot and update. First we organized the files in the repo to have a directory for each templates. We created a .toml file to pass variables and parameters to the template files. Then, we created a bash script to create the change sets for each stacks. This way we needed to approve the changes before deployment. I had some minors issues with the health-check of the backend service, the certificate in the us-east-1 region and the hosted zone.

## Repo Structure


## Cloudformation templates

## Troubleshooting
