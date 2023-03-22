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

### Home feed page
I added the Amplify import and the code to check the authentication.
![Home Feed](/journal/assets/home_page1_w3.png "Home Page")
[homepage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/HomeFeedPage.js)

### Desktop Sidebar
I changed the code for the condtional statement of trending and suggested variables.
![Desktop Sidebar](/journal/assets/desktop_sidebar1_w3.png "Desktop Sidebar")
[DesktopSidebar.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/DesktopSidebar.js)

### Profile Info
I added the Amplify import and the code to signout.
![Profile Info](/journal/assets/profile_info1_w3.png "Profile Info")
[ProfileInfo.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ProfileInfo.js)

### Signin Page
I added the Amplify import and the code to the action on submit.
![Signin Page](/journal/assets/signin1_w3.png "Signin Page")
[SigninPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/SigninPage.js)


## JWT Token

## UI improvement
