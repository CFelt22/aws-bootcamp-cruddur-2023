# Week 4 — Postgres and RDS

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
Adding queries in this page to display in the application.
![home_activities.py](/journal/assets/homeact2_w4.png "home_activities.py")
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
## Refactoring the librairy

### db.py

### create_activity.py

### home_activity.py

### Lambda

## SQL

### create.sql

### home.sql

### object.sql

## Troubleshooting

### Problem

### Attempts

### Solution
