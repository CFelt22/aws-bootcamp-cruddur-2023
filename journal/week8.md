# Week 8 — Serverless Image Processing
This week was about implementing the user profile page. First we used CDK to deploy a S3 Bucket and a Lambda function that format the uploaded profile avatars images. Then we added the popup user profile info and make it possible to save the informations in the local db. We created a CloudFront distribution to cache the images. 

## Serverless Image Processing
### CDK 
In the *thumbing-serverles-cdk* directory, we setup the CDK to deploy a lambda funaction and a S3 Bucket to upload the avatar image and process it in a format that is more suitable for the application. We also did the bootstrap in the region of the app in AWS.
![Stacks](/journal/assets/Bootstrap+Stack1_w8.png "Stacks")
[thumbing-serverless-cdk](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/tree/main/thumbing-serverless-cdk)
### Lambdas
We created the content of the Lambda function to process the image. We also created bash scripts to test the upload and clear the bucket.  
[index.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/lambdas/process-images/index.js)  
[s3-image-processing.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/91138bc94c91a62ebd392ce0d686412c3d608e62/aws/lambdas/process-images/s3-image-processing.js)  
![Lambda](/journal/assets/Lambda1_w8.png "Lambda")

## Serving Avatars via CloudFront
We created a CloudFront distribution to cache and serve the content of the S3 Bucket used to store the users avatar and the banners.
![CloudFront](/journal/assets/CloudFront1_w8.png "CloudFront")

## Implement Users Profile Page
We added the ossibility of changing the name and the bio of the user. We had to add the bio in the database. We created a script to migrate the database and to rollback.
![Avatar](/journal/assets/AvatarUpload1_w8.png "Avatar")
![Migrate](/journal/assets/migrate1_w8.png "Migrate")
[Migrate](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/db/migrate)
[Rollback](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/db/rollback)

## Implement Migrations Backend Endpoint and Profile Form

## Implement Avatar Uploading

## Fix CORS for API Gateway and Lambda Layers
We added the CORS configuration in the S3 Bucket permissions.

## Render Avatar from CloudFront
We created a separate js file for the avatar. This component is fetching the avatar image from the CloudFront distribution and is using the user uuid. So we added the user uuid in the CheckAuth.js file, in the ProfileInfo.js file and in the ProfileHeading.js file. We also added the user uuid in the SQL query of the shoe.sql file.
![ProfileAvatar.js](/journal/assets/ProfileAvatar1-w8.png "ProfileAvatar.js")
[ProfileAvatar.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/d3c019f993c617e53e2d16add6728b2eb4af0fd1/frontend-react-js/src/components/ProfileAvatar.js)

## Bash scripts
Along the bootcamp, I had a lot of problems with the use of the local db. I had to create two variable, *CONNECTION_URL* and *LOCAL_CONNECTION_URL*. Depending of the use, I had to switch between the two when I was using the previous scripts to setup and seed the databases. I was tired of changing it manually, so I decided to create a script to do all the steps for me. I searched how to writ a sed command to change it in the db.py file.  
``` bash
sed -i 's/connection_url = os\.getenv("CONNECTION_URL")/connection_url = os.getenv("LOCAL_CONNECTION_URL")/' $WRKSPACE_PATH/backend-flask/lib/db.py
```
I created the script *localdb* that is using the db setup, ddb schema-load, db update-cognito-user, ddb seed and migrate the bio.
![Script](/journal/assets/script1_w8.png "Script")
[Script](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/db/localdb)
