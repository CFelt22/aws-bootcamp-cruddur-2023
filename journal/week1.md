# Week 1 — App Containerization
I didn't struggled this week to follow the instructions videos. Again this week, the hardest part is to find time to do extra homeworks.

## 1. Create a DockerFile for the backend
[DockerFile backend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/Dockerfile)

## 2. Create a DockerFile for the frontent
[DockerFile frontend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/Dockerfile)

## 3. Create a docker-compose file for both containers
[docker-compose.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/docker-compose.yaml)

## 4. Build and run the containers

## 5. Tried to debug the npm install
When we are running the docker compose file, the frontend docker is never working unless we do a manual install of npm. Three modules are deprecated. The same modules are deprecated when I do a manual install but they are working. I tried to add the updates of the deprecated modules in the `DockerFile` but it wasn't working. The way I found to fix the problem was to edit the `gitpod.yaml` file. I added the lines to change the directory and to install npm. This way, I don't have to do it manually when I launch a gitpod workspace.
[gitpod.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/.gitpod.yml)
![NPM](/journal/assets/npm-install.png "npm install")

## 6. Watching tutorial about Docker
I'm a beginner with Docker, this week livestream was the first time I was using it so I watched Adrian Cantrill Docker Fundamentals.
![ACDF](/journal/assets/DockerTuto.png "Docker Fundamentals")

## 7. Tried to install Docker Desktop
I tried to install Docker Desktop, but unfortunatly, my laptop is running on MacOs Catalina and is too old to be updated. I looked for older versions, but it's not recommended since many security patches wouldn't be applied. So I used Gitpod to do Adrian Cantrill tutorial.
![DD](/journal/assets/Docker-desktop.png "Docker Desktop")
