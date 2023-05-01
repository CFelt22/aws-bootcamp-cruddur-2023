# Week 6 & 7 — Deploying Containers
These weeks were about deploying our frontend and backend containers to AWS. We had to make sure the infrastructure around it was working properly. Here are the tasks that we had to do. At the bottom of the journal, I put the Open Up the CLoud Homework. Once again, I didn't had the time to do extra homework, I'm trying to catch up the schedule. This week I am a little bit condensed for the journal, I try to maximize my time by watching the more videos as I can.

## Tasks

#### Health-checks
First step was to add the health-check route to app.py. Then we added the test file for the database and the file for the backend.

### Service role
We created services roles and policies to allow access between all AWS services that we need such as the parameter store, CloudWatch, ALB and ECR.  
CruddurTaskRole
![CruddurTaskRole](/journal/assets/ctr1-w6.png "CruddurTaskRole") 
CruddurServiceExecutionRole
![CruddurServiceExecutionRole](/journal/assets/cser1-w6.png "CruddurServiceExecutionRole")
AWSServiceRoleForECS
![AWSServiceRoleForECS](/journal/assets/asrfe1-w6.png "AWSServiceRoleForECS")

### Task definitions
We created task definitions for the frontend and the backend containers. It contains the parameters of the containers.
![Cluster](/journal/assets/cluster1-w6.png "Cluster")
[Frontend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/task-definitions/frontend-react-js.json)
[Backend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/task-definitions/backend-flask.json)

### ECS Cluster
We created the ECR repo for the frontend and the backend, pushed the images, created a cluster and deployed the containers to fargate. We also created service roles for ECS.
![Cluster](/journal/assets/cluster1-w6.png "Cluster")
![Services](/journal/assets/services1-w6.png "Services")
![Tasks](/journal/assets/tasks1-w6.png "Tasks")
![Backend](/journal/assets/backend1-w6.png "Backend")
![Frontend](/journal/assets/frontend1-w6.png "Frontend")

### Domain
I redirected my dns to be managed in Route53. I created a hosted zone, a record for the cruddur application and another subdomain for the backend.
![Hosted Zone](/journal/assets/hostedzone1-w6.png "Hosted Zone")
![Records](/journal/assets/dns1-w6.png "Records")

### SSL Certificate
In certificate manager, I created a SSL certificate for HTTPS.
![Certificate](/journal/assets/dns1-w6.png "Certificate")

### Load balancer
We configured the load balancer and a target group to direct trafic on the right ports of the containers. I then added the certificate to the load balancer. We created an IAM policy to allow logs in CloudWatch.
![Load-balancer](/journal/assets/loadb1-w6.png "Load-Balancer")
![Target Group](/journal/assets/target1-w6.png "Target Group")
![Service Role](/journal/assets/asrfelb1-w6.png "Service Role")

### Configure CORS to only permit traffic from our domain.

### Debug mode.
We made sure the production application was not running in debug mode for security reasons.

### Refresh token for Amazon Cognito
We implemented the refresh token to make sure that it is passed in the application whenever we naviguate the different pages.

### Bin directory
We spend some time to refactor the bin directory and create new bash scripts for commands that we use frequently. I will not post every modifications that we did, it will be too long. You can consult the link :
[Bin](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/tree/main/bin)

### X-ray and Container Insights.
We added x-ray configuration and turned on ontainer insights to make sure we get information from the containers while they are running.

### Change Docker compose to use a user-defined network.

### Docker file for production.
We created a new Dockerfile to use in production. We used the production env variables.
[Frontend](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/3f00aded61f3969bde9d70037961fea2d6f77283/frontend-react-js/Dockerfile.prod)
[Backend](

### Using Ruby to generate out env files for docker using erb templates.
We used ruby to generate the env files to make sure that we properly pass the to the containers. We used Ruby and .erb files. By adding the .env to gitignore, we make sure that we don't commit critical informations end expose them. We didi one file for the frontend and one for the backend.
![Frontend](/journal/assets/rubyfront1-w6.png "Frontend")
![Backend](/journal/assets/rubyback1-w6.png "Backend")
[env]()

## Open Up The Cloud Homework

### Dreams and fears of an hiring manager
As a hiring manager, I also want someone with good social skills. They need to be able to explain their ideas and defend them. Being able to defend their ideas also means being able to accept criticism and listen to others' ideas. I want someone who is able to work in a team, share knowledge and information, and who can help the enterprise grow. My biggest fear is hiring someone who is not able to work in a team and collaborate. Someone who thinks their ideas are always the best and becomes angry when their ideas are not followed. It's easier to teach someone missing knowledge than it is to make them work as a team.

### Resume
This is the kind of strucutre that I would use the next time I will apply for a job.
![Resume](/journal/assets/resume.png "Resume")

### Credibility matrix
This is my credibility matrix. At the moment, I do not have any certifications. I build my knowledge from courses found online. This is so far the basic knowledge that I learned from the past two years.
![Matrix](/journal/assets/Credibility.png "Matrix")

### Identify opportunities to move up
Since I do not have an IT education, I am looking to improve my basic IT knowledge. This is why I am doing this bootcamp; I wanted to have a better overview of what is needed for the development of an application. After that, I will work towards obtaining the Advanced Networking certification for my current job. Then, I plan on pursuing the SysOps Administrator certification. Having some certifications will help establish my credibility since I am transitioning to a new career path. Additionally, I plan on working on personal projects to develop applications, which will help me apply for higher-level jobs.
