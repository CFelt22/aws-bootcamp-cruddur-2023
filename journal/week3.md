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

### Signup Page
I added the Amplify import and the code to the action on submit when signin up.
![Signup Page](/journal/assets/signup1_w3.png "Signup Page")
[SignupPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/SignupPage.js)

### Confirmation Page
I added the Amplify import and the code to resend a verification code and submit it.
![Confirmation Page](/journal/assets/confirmation1_w3.png "Confirmation Page")
[ConfirmationPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/ConfirmationPage.js)

### Recover Page
I added the Amplify import and the code to send a recover code and to submit it.
![Recover Page](/journal/assets/recover1_w3.png "Recover Page")
[RecoverPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/RecoverPage.js)

## JWT Token

### Home Page
I added the headers to pass the access token.
![Home Page](/journal/assets/home_page2_w3.png "Home Page")
[HomePage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/HomeFeedPage.js)

###  Profile Info
I added code to clear the access token when login out.
![Profile Info](/journal/assets/profile_info2_w3.png "Profile Info")
[ProfileInfo.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ProfileInfo.js)

### Home Activities
Adding a fake user comment to test the login.
[Home Activities](/journal/assets/home_activities1_w3.png "Home Activities")
[home_activities.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/home_activities.py)

### Requirements
Adding Flask-Amplify in the requirements file.
![Requirements](/journal/assets/requirements1_w3.png "Requirements")
[requirement.txt](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/requirements.txt)

### JWT Token file
Creating the file cognito_jwt_token and to use it as a library.
[cognito_jwt_token.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/cognito_jwt_token.py)

### App.py
Importing sys and the cognito_jwt_token librairy.
![App.py lib](/journal/assets/librairy1_w3.png "Librairy")
Adding the variables.
![App.py var](/journal/assets/var1_w3.png "Variables")
Fixing the CORS issue.
![App.py CORS](/journal/assets/cors1_w3.png "CORS")
Adding the acces token data for the Home Activities and some app logger to help debug.
![App.py Home](/journal/assets/home1_w3.png "Home Activities")
[App.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/app.py)

## UI improvement
