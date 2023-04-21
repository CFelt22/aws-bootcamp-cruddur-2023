# Week 5 — DynamoDB and Serverless Caching
The first step was to inject data in the local DynamoDB to make sure the data was displaying properly in the app. The second step was to create the DynamoDB database in AWS to use it for production. I had some problems to display the data properly with the local database. Previously, I had problems with the conection url. It took me a lot of time to figure out that I need to change the variable of CONNECTION_URL and LOCAL_CONNECTION_URL while seeding the local DB and the local DynamoDB. Some of the steps executed by the setup bash script were not working.

## Restructuring bash scripts
We changed some of the bash script to have a better structure in the directories.

### Utility scripts

### Adding boto3
We added boto3 to the requirements.txt file and installed it.
![requirements.txt](/journal/assets/requirements1-w5.png "boto3")
[requirements.txt](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/b367d924e8c1b00c828c50c448740272fee6931a/backend-flask/requirements.txt)

### Schema-load
We added a file to create the bash file to create the schema in the DynamoDB table.
![schema-load](/journal/assets/schema-load1-w5.png "schema-load")
[schema-load](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/b367d924e8c1b00c828c50c448740272fee6931a/backend-flask/bin/ddb/schema-load)

### Drop table
This script is used to drop a table.
![drop](/journal/assets/drop1-w5.png "drop")
[drop](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/4a8abc50ac1e45498c98ff7ed22510ea382937a5/backend-flask/bin/ddb/drop)

### List tables
This script is used to list tables in the database
![list-tables](/journal/assets/list1-w5.png "list-tables")
[list-tables](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/4a8abc50ac1e45498c98ff7ed22510ea382937a5/backend-flask/bin/ddb/list-tables)

### Scan
This script is used to scan items in the table.
![scan](/journal/assets/scan1-w5.png "scan")
[scan](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/4a8abc50ac1e45498c98ff7ed22510ea382937a5/backend-flask/bin/ddb/scan)

### Seed
This script is used to inject mock data inside the DynamoDb table.
![seed](/journal/assets/seed1-w5.png "seed")
[seed](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/4a8abc50ac1e45498c98ff7ed22510ea382937a5/backend-flask/bin/ddb/seed)

### Get Conversations
This script is used to get the content of the mock conversation and see the data.
![get-conservations](/journal/assets/get-conv1-w5.png "get-conservations")
[get-conservations](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/fcb935b874450daebf48781e0833ec15f13f87eb/backend-flask/bin/ddb/patterns/get-conversation)

### List Conversations
This script is used to list the mock conversation and see the data.
![list-conversations](/journal/assets/list-conv1-w5.png "list-conversations")
[list-conversations](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/fcb935b874450daebf48781e0833ec15f13f87eb/backend-flask/bin/ddb/patterns/list-conversations)

### db.py
We modified this script to add parameters and to query values.
![db.py](/journal/assets/db1-w5.png "db.py")
[db.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/d373a925dacd057b779e3432bd8ef9d41a4ce1aa/backend-flask/lib/db.py)

## Implement conversations

### Gitpod.yaml

### App.py

### List Users

### Update Cognito Users Id

### Setup

### UUID from Cognito User Id

### DDB.py

### message_groups.py

## Changing source in setup

## DynamoDB in production

![]("")
[]()
