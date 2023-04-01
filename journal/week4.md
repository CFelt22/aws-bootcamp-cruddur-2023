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

### Connection to the prod db

### Installing requirements

### Importing data in home_activities from db.py

### Adding the variables in docker-compose

## Queries

### Adding queries in db.py

### Adding queries in home_activities.py

## Updating SG

### Bash file

### Gitpod.yaml

### Connection to the prod db

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
