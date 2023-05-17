# Week 8 — Serverless Image Processing
This week was about implementing the user profile page. First we used CDK to deploy a S3 Bucket and a Lambda function that format the uploaded profile avatars images. Then we added the popup user profile info and make it possible to save the informations in the local db. We created a CloudFront distribution to cache the images. 

## Serverless Image Processing

## Serving Avatars via CloudFront

## Implement Users Profile Page

## Implement Migrations Backend Endpoint and Profile Form

## Implement Avatar Uploading

## Fix CORS for API Gateway and Lambda Layers

## Render Avatar from CloudFront
We created a separate js file for the avatar. This component is fetching the avatar image from the CloudFront distribution and is using the user uuid. So we added the user uuid in the CheckAuth.js file, in the ProfileInfo.js file and in the ProfileHeading.js file. We also added the SELECT in the shoe.sql file.
![ProfileAvatar.js](/journal/assets-ProfileAvatar1-w8.png "ProfileAvatar.js")
[ProfileAvatar.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/d3c019f993c617e53e2d16add6728b2eb4af0fd1/frontend-react-js/src/components/ProfileAvatar.js)
