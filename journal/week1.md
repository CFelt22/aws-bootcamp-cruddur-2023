# Week 1 — App Containerization
I didn't struggled this week to follow the instructions videos. Again this week, the hardest part is to find time to do extra homeworks. Here are the main things I did this week.

## 1. Create a DockerFile for the backend
I followed the steps to create the DockerFile, everything went well.
[DockerFile backend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/Dockerfile)

## 2. Create a DockerFile for the frontent
Everything went well too for the creation of the DockerFile for the frontend.
[DockerFile frontend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/frontend-react-js/Dockerfile)

## 3. Create a docker-compose file for both containers
Same as the two previous steps.
[docker-compose.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/docker-compose.yaml)

## 4. Adding the notifications page and changing the message in the backend
Had some difficulties here, while I copy/pasted the code from the home page, I accidentally erase a part of the home page. Took me a little bit of time to figure out what was the problem.
![Notifications](/journal/assets/Backend.png "Notifications")

## 4. Build and run the containers
Everything went weel for this part. The fact that the frontend container was not running when I would do the Docker Compose Up was kind of annoying.
![Running](/journal/assets/Run.png "Containers running")
![Ports](/journal/assets/Ports.png "Ports")

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
