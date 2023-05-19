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



## Serving Avatars via CloudFront

## Implement Users Profile Page

## Implement Migrations Backend Endpoint and Profile Form

## Implement Avatar Uploading

## Fix CORS for API Gateway and Lambda Layers
We added the CORS configuration in the S3 Bucket permissions.

## Render Avatar from CloudFront
We created a separate js file for the avatar. This component is fetching the avatar image from the CloudFront distribution and is using the user uuid. So we added the user uuid in the CheckAuth.js file, in the ProfileInfo.js file and in the ProfileHeading.js file. We also added the user uuid in the SQL query of the shoe.sql file.
![ProfileAvatar.js](/journal/assets/ProfileAvatar1-w8.png "ProfileAvatar.js")
[ProfileAvatar.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/d3c019f993c617e53e2d16add6728b2eb4af0fd1/frontend-react-js/src/components/ProfileAvatar.js)
