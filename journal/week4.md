# Week 4 — Postgres and RDS
Once again, time is the principal constraint. Everything went good, except for a bug that I spent several hours to fix.

## Creating bash file for db
Creation of multiple bash files to simplify the commands to do for the databases.
### db-connect
This is to connect to the database.
![db-connect](/journal/assets/dbconnect1_w4.png "db-connect")
[db-connect](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-connect)
### db-create
This is to create an new database.
![db-connect](/journal/assets/dbcreate1_w4.png "db-connect")
[db-create](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-create)
### db-drop
This is to drop an existing database.
![db-drop](/journal/assets/dbdrop1_w4.png "db-drop")
[db-drop](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-drop)
### db-schema-load
This is to load a schema inside a database. The content of the schema is inside the file schema.sql.
![db-schema-load](/journal/assets/dbschemaload1_w4.png "db-schema-load")
[db-schema-load](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-schema-load)
### db-seed
This is to inject data inside the database. The content is in the file seed.sql.
![db-seed](/journal/assets/dbseed1_w4.png "db-seed")
[db-seed](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-seed)
### schema.sql
This is to create the tables with the content inside of it.
![schema.sql](/journal/assets/schema1_w4.png "schema.sql")
[schema.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/schema.sql)
### seed.sql
This is the mock data injected in the database.
![seed.sql](/journal/assets/seed1_w4.png "seed.sql")
[seed.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/seed.sql)
### db-sessions
This is to see the active sessions in the database.
![db-sessions](/journal/assets/dbsessions1_w4.png "db-sessions")
[db-sessions](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-sessions)
### db-setup
This is a bash script to automate the drop, create, shema-load and seed inside the database.
![db-setup](/journal/assets/dbsetup1_w4.png "db-setup")
[db-setup](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-setup)

## Postgresql
### Connection to the db
Creation of the db.py file and adding code to connect to the db.
![db.py](/journal/assets/dbpy1_w4.png "db.py")
[db.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/db.py)
### Installing requirements
Adding Cognito and psycopg to the requirements.txt file and installing them.
![requirements.txt](/journal/assets/requir1_w4.png "requirements.txt")
[requirements.txt](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/requirements.txt)
### Importing data in home_activities and the db.py librairy
Replacing the mock data in the home_activities.py file by sql queries in the database.
![home_activities](/journal/assets/homeact1_w4.png "home_activities.py")
[home_activities](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/home_activities.py)
### Adding the variables in docker-compose
Adding a varibale for the local db in the docker-compose file.
![docker_compose.yaml](/journal/assets/dockercomp1_w4.png "docker-composel.yaml")
[docker_compose.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/docker-compose.yaml)

## Queries
Adding code in the librairy and in the home_activities to queries in the database instead of using mock data.
### Adding queries in db.py
Adding code to query objects and arrays.
![db.py](/journal/assets/dbpy2_w4.png "db.py")
[db.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/db.py)
### Adding queries in home_activities.py
Adding queries in this file to display in the application.
![home_activities.py](/journal/assets/homeact2_py.png "home_activities.py")
[home_activities](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/home_activities.py)

## RDS database
This will be the production database, used by the application.
### Creation of the rds database
In AWS, we manually created a RDS database.
![AWS RDS](/journal/assets/rdsdb1_w4.png "AWS RDS")
### Bash file
Everytime gitpod open a workspace, it has a different ip address. We are creating a bash script to update the security group of the database in AWS.The bash file get the gitpod ip adress and send update the security group.
![rds-update-sg-rule](/journal/assets/rdsupdate1_w4.png "rds-update-sg-rule")
[rds-update-sg-rule](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/rds-update-sg-rule)
### Gitpod.yaml
We are using the gitpod.yaml file to add the ip adress of gitpod into a varaible to be used in the previous bash file.
![gitpod.yaml](/journal/assets/gitpod1_w4.png "gitpod.yaml")
[gitpod.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/.gitpod.yml)
### Connection to the prod db
Adding an if statement to connect to the local db or the prod db.
![db-connect](/journal/assets/gitpod1_w4.png "db-connect")
[db-connect](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/bin/db-connect)

## Post confirmation
Creation of a lambda function to insert data inside the production database.
### cruddur-post-confirmation.py
We stored in the git repo the code for the lambda function.
![post-confirmation](/journal/assets/postconf1_w4.png "post-confirmation")
[post-confirmation](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/lambdas/cruddur-post-confirmation.py)
### Creation of the lambda function
The lambda function is created by the AWS console.
![lambda](/journal/assets/lambda1_w4.png "lambda")
### Permissions
We need to add permissions for the logs.
![lambda permissions](/journal/assets/lambda1_w4.png "permissions")
### VPC
We need to add the lambda function inside a vpc.
![lambda vpc](/journal/assets/lambda1_w4.png "vpc")

## Refactoring the librairy
We refactored the librairies to create queries instead of using mock data for the application. We also added print for easier debugging.

### db.py
[db.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/lib/db.py)
### create_activity.py
![create_activity](/journal/assets/createact1_w4.png "create_activity")
[create_activity](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/create_activity.py)
### home_activity.py
![home_activity](/journal/assets/homeact3_w4.png "home_activity")
[home_activity.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/home_activities.py)


## SQL
We created insert and queries for the database.
### create.sql
This is used when a new message is created.
![create.sql](/journal/assets/create1_w4.png "create.sql")
(https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/create.sql)
### home.sql
This is used to display in the home page of the app.
![home.sql](/journal/assets/home1_w4.png "home.sql")
[home.sql](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/home.sql)
### object.sql
This is used to query an object.
![object.sql](/journal/assets/object1_w4.png "object.sql")
[object.sql]https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/db/sql/activities/object.sql

## Troubleshooting

### Problem
I had several problems that I tried to fix when I was trying to post a message. The most persistent one was that *null value in column "user_uuid" of relation "activities" violates not-null constraint"*. I also had problem with the local db. It was not able to understant "db" in the connection url.
![Error](/journal/assets/error1_w4.png "Error")

### Attempts
I understanded that the problem was linked to the uuid that was not passed when a post was made. I saw on discord that the "db" problem was to change it to "localhost". It worked for the db connection errors, but I still wasn't able to post. When injecting mock data, I also had problem with the email that was null. In the seed.sql file, I tried to change data to put my name and username. I also tried to add a fake email. I wasn't working either. I saw on discord that I had to add "user_handle" in the "ActivityForm.js", "HomeFeedPage.js" and in the "app.py" files. It didn't worked either.
![ActivityForm.js](/journal/assets/activityform1_w4.png "ActivityForm.js")
![HomeFeedPage.js](/journal/assets/homepage1_w4.png "HomeFeedPage.js")

### Solution
I finally found that a user, bayupw, posted about creating a third variable called LOCAL_CONNECTION_URL and it worked for me. I had part of my code that was using the local db and another part that was using the prod db because it wasn’t able to connect to the local db. Once I did this, everything worked. So I used the LOCAL_CONNECTION_URL variable in the "db-setup" bash script. It finally worked and I was able to post messages.
![Discord](/journal/assets/discord1_w4.png "Discord")
![Fixed](/journal/assets/fixed1_w4.png "Fixed")
![Post](/journal/assets/post1_w4.png "Post")
