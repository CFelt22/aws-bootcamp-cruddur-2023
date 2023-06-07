# Week 9 — CI/CD with CodePipeline, CodeBuild and CodeDeploy
This week went very well. I didn't had many problems. Hers's what we did.

## Buildspec.yaml file
We created the file used to build the image of the backend container.
![Buildspec.yml](/journal/assets/buildspec1_w9.png "Buildspec.yml")
[Buildspec.yml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/buildspec.yml)

## Build
We created the build phase in codebuild.
![Build](/journal/assets/build1_w9.png "Build")

## Pipeline
Then we created the pipeline that is triggered by a pull request from github.
![Pipeline](/journal/assets/pipeline1_w9.png "Pipeline")

## Errors
At first, I had som problems with the build. I had this error message :
```
[Container] 2023/05/21 11:55:17 Phase context status code: COMMAND_EXECUTION_ERROR Message: Error while executing command: docker push $IMAGE_URL/$REPO_NAME. Reason: exit status 1
```
I looked on stackoverflow, and someone was saying that the problem was related to the tag *latest* that was already used. I tried several solutions but nothing worked. Turns out I was missing some permissions for ECR. I added those and it worked.

``` json
"Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ecr:GetAuthorizationToken",
                "ecr:BatchCheckLayerAvailability",
                "ecr:BatchGetImage",
                "ecr:CompleteLayerUpload",
                "ecr:GetDownloadUrlForLayer",
                "ecr:InitiateLayerUpload",
                "ecr:PutImage",
                "ecr:UploadLayerPart"
            ],
            "Resource": "*"
```

## Success
To validate that the pipeline was working properly, we added some code in the health-check in the app.py file.
![Tasks](/journal/assets/tasks1_w9.png "Tasks")
![Health-Check](/journal/assets/health-check1_w9.png "Health-Check")
