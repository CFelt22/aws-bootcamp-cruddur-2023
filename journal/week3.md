# Week 3 — Decentralized Authentication


## AWS Cognito

### Installing Amplify
I installed AWS Amplify and it updated the package.json and the package-lock.json files.
```
npm i aws-amplify --save
```

### Creating user-pool
I created a user-pool. Had to do it again when we had the login error.
![User-Pool](/journal/assets/UserPool1_w3.png "User-Pool")

### Creating user
I created a temporary user to test the signin page. I confirmed the email address by this CLI command: 
```
aws cognito-idp admin-set-user-password --username name --password pas$word --user-pool-id ca-central-1_aaa --permanent
```
This is the real user I created with the signup page.
![User](/journal/assets/User1_w3.png "User")

### Docker-Compose
I added the variables for the front-end and the back-end to use the user-pool.
![docker-compose](/journal/assets/docker-compose1_w3.png "Docker-Compose")
[docker-compose.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/docker-compose.yaml)

### Integrating Cognito
I did the import for Amplify in the App.js file and added the variables.
![Amplify](/journal/assets/amplify1_w3.png "Amplify")
[App.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/App.js)

## Implement custom pages



## JWT Token

## UI improvement
