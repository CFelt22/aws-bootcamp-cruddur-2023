# Week 1 — App Containerization

## 2. Trying to debbug the npm install
When we are running the docker compose file, the frontend docker is never working unless we do a manual install of npm. Three modules are deprecated. The same modules are deprecated when I do a manual install but they are working. I tried to add the updates of the deprecated modules in the `DockerFile` but it wasn't working. The way I found to fix the problem was to edit the `gitpod.yaml` file. I added the lines to change the directory and to install npm. This way, I don't have to do it manually when I launch a gitpod session.
![NPM](/journal/assets/npm-install.png "npm install")

## 3. Watching tutorial about Docker
I'm a beginner with Docker, this week livestream was the first time I was using it so I watched Adrian Cantrill Docker Fundamentals.
![ACDF](/journal/assets/DockerTuto.png "Docker Fundamentals")
