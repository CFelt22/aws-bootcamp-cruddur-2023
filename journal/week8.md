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

## Implement Users Profile Page, Migrations Backend Endpoint and Profile Form
### Profile heading
We created the profile heading component to contain all the user infos and integrated a banner.
![ProfileHeading.js](/journal/assets/profileheading1_w8.png "ProfileHeading.js")
[ProfileHeading.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/13f8674510a60169ff1e3d033f4f36cce6a11314/frontend-react-js/src/components/ProfileHeading.js)

### Bio
We added the possibility of changing the name and the bio of the user. We had to add the bio column in the database and implement the modifications of those informations. We created a script to migrate and roll backthe the database.
![Avatar](/journal/assets/AvatarUpload1_w8.png "Avatar")
![Migrate](/journal/assets/migrate1_w8.png "Migrate")
[Migrate](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/db/migrate)  
[Rollback](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/db/rollback)

### Edit profile and upload button
We added a button to edit the user profile and upload the avatar image.
![EditProfileButton](/journal/assets/editprofilebutton1_w8.png "EditProfileButton")
[EditProfileButton](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/c1d160038e3e1b47dd634964bbf7f4e7502713e5/frontend-react-js/src/components/EditProfileButton.js)
![UploadButton](/journal/assets/uploadbutton1_w8.png "UploadButton")

## Implement Avatar Uploading
We created a lambda function and an API Gateway to POST the uploaded avatar picture in the S3 Bucket who is processing the image.
![Lambda](/journal/assets/lambdaauth1_w8.png "Lambda")
![Lambda](/journal/assets/lambdaauth2_w8.png "Lambda")
[Lambda](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/lambdas/lambda-authorizer/index.js)

## Fix CORS for API Gateway and Lambda Layers
We added the CORS configuration in the S3 Bucket permissions. I had a lot of problems with CORS error. I was always getting undefined presignedurl, so the image was never uploading. After many hours of search and minor bug fixing, with the posted messages from F4dy and Beici Liang on the Discord channel, I validated every steps of the implementation and found out that I forgot to add the CLIENT_ID and USER_POOL_ID in the environment variables of the lambda function. I also found that I had a typo in the code from the Lambda function. I had *to-json* instead of *to_json*.
![CORS](/journal/assets/CORS1_w8.png "CORS")
[CORS](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/s3/cors.json)

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
