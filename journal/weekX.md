This is the final week of the Bootcamp. This week was about fixing bugs with the app. I followed every video that was published. I also tried to fix some other bugs by myself, even if my knowledge in python and react is not that great. Unfortunately, the app still have a lot of bugs and features that are not working.

## Fix warnings

First of all, I fixed the multiple warnings for the build of the app. It was mostly syntax warnings that didn't cause any bug in the application. As an example, adding default case in a switch statement, removing unused import in *js* files, using *flex-start* instead of *start*.   
![Fix warnings](/journal/assets/fix-warnings_wx.png "Fix-Warnings")

## Sync tools for static website hosting
We created a sync tool to put the static website to be delivered by a CloudFront distribution. We need to build the frontend before we upload it to a S3 bucket, where CloudFront is going to get the reference. 
#### Creating a bash script for the static build.
![static-build](/journal/assets/static-build_wx.png "Static-Build")
[static-build](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/frontend/static-build)

#### Creating the sync ruby file 
![sync](/journal/assets/sync_wx.png "Sync")
[sync](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/frontend/sync)

#### Adding the sync env *.erb* file creation to the generate-env file.
![generate-env](/journal/assets/generate-env_wx.png "generate-env")
[generate-env](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/frontend/generate-env)

#### Creating the Gemfile
![Gemfile](/journal/assets/gemfile_wx.png "Gemfile")
[Gemfle](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/Gemfile)

#### Creating the Rakefile
![Rakefile](/journal/assets/rakefile_wx.png "Rakefile")
[Rakefile](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/Rakefile)

#### Creating the config file
![config.toml](/journal/assets/config_wx.png "config.toml")
[config.toml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/sync/config.toml)

#### Creating the template file
![template.yaml](/journal/assets/template_wx.png "template.yaml")
[template.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/cfn/sync/template.yaml)

#### Creating the bash script for the sync
![sync](/journal/assets/sync1_wx.png "sync")
[sync](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/cfn/sync)

## Reconnect DB and Postgres Confirmation Lambda
We configured the database url and updated the security groups. We did the migration of the database to have the last version of the tables and the schema. 

#### Refactoring the cruddur-post-confirmation.py
![cruddur-post-confirmation.py](/journal/assets/cruddur_post_confirmation_wx.png "post confirmation")
[cruddur-post-confirmation](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/lambdas/cruddur-post-confirmation.py)

## Fix CORS to use domain name for web-app
We added parameters in the config file of the service Cloudformation stack to add the url of the frontend and the backend.
![config](/journal/assets/config1_wx.png "config")

## Ensure CI/CD pipeline works and create activity works
We changed the hardcoded values of the data activities to use the jwt token.
![app.py](/journal/assets/app_wx.png "app.py")
[app.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/7c09b05d880434d2daa079e1185c9d70047b9ea9/backend-flask/app.py)   
In the app, we changed the use of the *handle* and the *user_handle* to *cognito_user_id*.   
![create_activity.py](/journal/assets/create_activity_wx.png "create_activity.py")
[create_activity.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/create_activity.py)
![create.sql](/journal/assets/create_wx.png "Create.sql")
[create.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/create.sql)
Adding the authentication in the ActivityForm
![ActivityForm.js](/journal/assets/activity_form_wx.png "ActivityForm")
[ActivityForm.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/7c09b05d880434d2daa079e1185c9d70047b9ea9/frontend-react-js/src/components/ActivityForm.js)

## Refactor to use JWT Decorator in Flask App
We refactored the *cognito_jwt_token.py* file to import the lib in others python files.
![cognito_jwt_token](/journal/assets/jwt_token_wx.png "cognito_jwt_token")
[cognito_jwt_token.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/cognito_jwt_token.py)   
In the *app.py* file, we imported the *jwt_token* library and removed the token coded everywhere in the file. We also modified the error handling of the various functions.
![import](/journal/assets/app1_wx.png "import")
![functions](/journal/assets/app2_wx.png "functions")
[app.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/2f95aa028cd0ec2223d3ebe8d5716c3eaa0570bf/backend-flask/app.py)
In the *ReplyForm.js*, we added the window closing when you click elsewhere in the page.
![ReplyForm](/journal/assets/replyform_wx.png "ReplyForm")
[ReplyForm.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/2f95aa028cd0ec2223d3ebe8d5716c3eaa0570bf/frontend-react-js/src/components/ReplyForm.js)

## Refactor App.py
We removed a lot of parts of the *app.py* code to split them in different modules.
#### Cloudwatch.py
![CloudWatch](/journal/assets/cloudwatch_wx.png "cloudwatch")
[CloudWatch.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/cloudwatch.py)
#### cors.py
![cors](/journal/assets/cors_wx.png "cors")
[cors.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/cors.py)
#### honeycomb.py
![honeycomb](/journal/assets/honeycomb_wx.png "honeycomb")
[honeycomb](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/honeycomb.py)
#### rollbar.py
![rollbar](/journal/assets/rollbar_wx.png "rollbar")
[rollbar.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/rollbar.py)

#### xray.py
![xray](/journal/assets/xray_wx.png "xray")
[xray.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/xray.py)

#### app.py
This is what the *app.py* file looks like at this stage
[app.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/8311322278709a14d1451b41efdf5724fd9dcdf7/backend-flask/app.py)

#### NotificationsFeedPage.js
We imported the access token library and added the authorization in *NotificationFeedPage* function.
![Notifications](/journal/assets/nfeedpage_wx.png "Notifications")
[NotificationsFeedPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/NotificationsFeedPage.js)

## Refactor Flask Routes
As we did in the last step, we removed code from the *app.py* and split it in different libraries.
#### helpers.py
![helpers](/journal/assets/helpers_wx.png "helpers")
[helpers.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/helpers.py)
#### activities.py
![activities](/journal/assets/activities_wx.png "activities")
[activities.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/routes/activities.py)
#### general.py
![general](/journal/assets/general_wx.png "general")
[general.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/routes/general.py)
#### messages.py
![messages](/journal/assets/messages_wx.png "messages")
[messages.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/routes/messages.py)
#### users.py
![users](/journal/assets/users_wx.png "users")
[users.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/routes/users.py)
#### app.py
This is the *app.py* code at this step. We didn't changed it after.
[app.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/app.py)

## Implement Replies for Posts
#### Migration
We added a column *reply_to_activity_uuid* so the replies match the original post. We generated this file for the migration.
![migration](/journal/assets/migration_wx.png "migration")
[migration](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/migrations/16862511510585680_reply_to_activity_uuid_to_string.py)
#### reply.sql
We created a sql file to add the replies inside the database.
![reply](/journal/assets/reply_wx.png "reply")
[reply.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/reply.sql)
#### activities.py
We changed the *user_handle* to *cognito_user_id*.
![activities](/journal/assets/activites1_wx.png "activities")
[activities.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/routes/activities.py)
#### create_reply.py
![create reply](/journal/assets/create_reply_wx.png "create reply")
[create_reply.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/create_reply.py)
#### ActivityItem.js
We added the reply under the crud.
![activity item](/journal/assets/activity_item_wx.png "activity item")
[ActivityItem.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityItem.js)
#### ActivityItem.css
We added the code for the display of the replies.
![activity item css](/journal/assets/activity_item_css_wx.png "activity item css")
[ActivityItem.css](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityItem.css)

## Improved Error Handling for the App
#### SQL query for activities
We added a query for the activities.
![show activity](/journal/assets/show_activity_wx.png "show activity")
[activity/show.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/show.sql)
#### ActivityFeed.js
We added a sentence to display when there is no data.
![Nothing to see](/journal/assets/nothing_wx.png "Nothing")
![activity feed](/journal/assets/activity_feed_wx.png "activity feed")
[ActivityFeed.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityFeed.js)
#### ActivityFeed.css
We added the style for the text.
![activity feed ccs](/journal/assets/activity_feed_css_wx.png "activity feed css")
[ActivityFeed.css](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityFeed.css)
#### FormErrorItem.js
We created a component to list all errors possibilities.
![Error Item](/journal/assets/FormErrorItem_wx.png "Error Item")
[FormErrorItem.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/FormErrorItem.js)
#### FormError.js
We created a function to handle errors.
![Form Error](/journal/assets/FormError_wx.png "Form Error")
[FormError.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/FormErrors.js)
#### FormError.css
We added style to the errors display.
![Form Error css](/journal/assets/FormError_css_wx.png "Form Error css")
[FormError.css](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/FormErrors.css)
#### Requests.js
We created the requests library for the different requests in the app.
![Requests](/journal/assets/requests_wx.png "requests")
[Requests.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/lib/Requests.js)
#### Refactoring
We added the request library and the errors handling in the following files. I will only add the link to the following files
##### ActivityForm.js
[Activity Form](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityForm.js)
##### ReplyForm.js
[ReplyForm.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ReplyForm.js)
##### MessageForm.js
[MessageForm.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/MessageForm.js)
##### ProfileForm.js
[ProfileForm.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ProfileForm.js)
##### HomeFeedPage.js
[HomeFeedPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/HomeFeedPage.js)
##### MessageGroupNewPage.js
[MessageGroupNewPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/MessageGroupNewPage.js)
##### MessageGroupPage.js
[MessageGroupPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/MessageGroupPage.js)
##### MessageGroupsPage.js
[MessageGroupsPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/MessageGroupsPage.js)
##### NotificationsFeedPage.js
[NotificationsFeedPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/NotificationsFeedPage.js)
##### SigninPage.js
[SigninPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/SigninPage.js)
##### SignupPage.js
[SignupPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/SignupPage.js)
##### UserFeedPage.js
[UserFeedPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/UserFeedPage.js)

#### Error example
![Error](/journal/assets/error_wx.png "Error")

## Activities Show Page
#### ActivityShowPage.js
We created a page for the activity display.
![Activity Show Page](/journal/assets/ActivityShowPage_wx.png "Activity Show Page")
[ActivityShowPage.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/ActivityShowPage.js)
#### ActivityShowPage.css
We added the style.
![Activity Show Page css](/journal/assets/ActivityShowPage_css_wx.png "Activity Show Page css")
[ActivityShowPage.css](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/pages/ActivityShowPage.css)
#### Replies.js
We created a reply component.
![Replies](/journal/assets/replies_wx.png "Replies")
[Replies.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/Replies.js)
#### show_activity.py
We removed the hard coded values from this file and added a function.
![show activity](/journal/assets/show_activity1_wx.png "Show Activity")
[show_activity.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/show_activity.py)
#### App.js
We imported the *ActivityShowPage* page.
![App](/journal/assets/app3_wx.png "app")
[App.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/App.js)
#### Actions: Like, Repost and Share
We added events on the actions buttons.
![Like](journal/assets/like_wx.png "Like")
[ActivityActionLike.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityActionLike.js)
![Repost](journal/assets/repost_wx.png "Like")
[ActivityActionRepost.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityActionRepost.js)
![Share](journal/assets/share_wx.png "Like")
[ActivityActionShare.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityActionShare.js)
#### ActivityItem.css
We added hover effects.
![Activity item](/journal/assets/activityItem_wx.png "Activity Item")
[ActivityItem.css](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityItem.css)

## More Cleanup
#### ActivityShowItem.js
We created this component to group everything related to the activity.
![Show Item](/journal/assets/show_item_wx.png "Show Item")
[ActivityShowItem.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ActivityShowItem.js)
#### DateTimeFormats.js
We modified the date time format to fix issues with time display.
![Date](/journal/assets/date_wx.png "Date")
[DateTimeFormats.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/lib/DateTimeFormats.js)

## Machine user
We created a *CloudFormation* stack to create an *IAM* user to do *DynamoDB* actions.
![Machine User](/journal/assets/MachineUser_wx.png "Machine User")
[machineuser](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/bin/cfn/machineuser)

## Fix rollbar
![rollbar](/journal/assets/rollbar1_wx.png "rollbar")
[Rollbar.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/rollbar.py)

## Improvements

#### Fixing profile link
The link was hardcoded to go to Andrew Brown profile, I fixed it to go to the *handle*.
![Desktop Nav](/journal/assets/DesktopNav_wx.png "Desktop Nav")
[DesktopNavigation.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/DesktopNavigation.js)

#### Adding a default image
With the help of ChatGPT, I added a default image called *undefined.jpg*. There is one problem at this time, even if the user have a profile picture, we can see the undefined image for one second at the loading of the page.
![ProfileAvatar](/journal/assets/ProfileAvatar_wx.png "ProfileAvatar")
[ProfileAvatar.js](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/src/components/ProfileAvatar.js)

#### Refactoring the colors
I changed the colors of the app. I used variables and changed them inside all of the app. The variables were not working with transparency. I had to switch back some values.
![Variables](/journal/assets/colors_wx.png "Variables")
![Signup](/journal/assets/colors1_wx.png "Signup")
![Profile](/journal/assets/colors2_wx.png "Profile")

