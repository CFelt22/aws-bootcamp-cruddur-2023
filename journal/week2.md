# Week 2 — Distributed Tracing
This week, the tasks were a bit harder. It was quite complicated to send the traces to Honeycomb, Rollbar or X-ray. I grouped some information to make it shorter to read.
## 1. Adding the environment variables for the tracing.
I added the different variables to be sure that the tracing will work.
[docker-compose.yaml](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/docker-compose.yaml)
![Docker-Compose](/journal/assets/Docker-compose_w2.png "Docker-Compose")
## 2. Adding the modules for tracing.
I added the needed modules in the requirements.txt file so they are installed at launch.
[Requirements](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/requirements.txt)
![Requirements](/journal/assets/Requirements1_w2.png "Requirements")
## 3. Adding code in the app.py file.
I added needed code to allow tracing to work. I added code for Honeycomb, Rollbar and X-Ray.
[App.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/app.py)
![App.py](/journal/assets/App_py1_w2.png "App.py")
## 4. Adding the tracers in the home_activities.py file.
I added the tracers to send data to honeycomb. I diddn't let the debug tracers, it caused me some problems.
[Tracers](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/home_activities.py)
![Tracers](/journal/assets/Tracers1_w2.png "Tracers")
## 5. Receiving data in Honeycomb.
After some credentials problems when the container was up, I finally got data.
![Honeycomb](/journal/assets/Honeycomb1_w2.png "Honeycomb")
## 6. Creating the xray.json file and adding code.
This is used to create a log group in CloudWatch.
[xray.json](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/aws/json/xray.json)
![xray.json](/journal/assets/Xray_json_w2.png "xray.json")
## 7. Adding subsegment in the notifications_activities.py file.
I decided to add the code in this file because it was Andrew's first intention.
[notifications_activities.py](https://github.com/CFelt22/aws-bootcamp-cruddur-2023/blob/main/backend-flask/services/notifications_activities.py)
![notifications_activities.py](/journal/assets/Notifications_w2.png "notifications_activities.py")
## 8. Adding the logger to app.py and home_activities.py
![logger](/journal/assets/Home_Activities_w2.png "logger")
## 9. Receiving data in X-Ray and CloudWatch
![X-Ray1](/journal/assets/Xray1_w2.png "X-Ray1")
![X-Ray2](/journal/assets/Xray2_w2.png "X-Ray2")
![X-Ray3](/journal/assets/Xray3_w2.png "X-Ray3")
## 10. Receiving data in Rollbar
![Rollbar](/journal/assets/Rollbar1_w2.png "Rollbar")
## 11. My journey to the cloud
Since two years, I changed career and I had the oportunity to learn AWS while working. I'm an ASEA SysAdmin (AWS Secure Environment Accelerator). I had no real prior background in IT. I was in video production and I learned many software by myself.
![Journey](/journal/assets/Journey1.png "Journey")
This is the job search that I did.  
Cloud Developer  
![Job1](/journal/assets/Job1_w2.png "Job1")  
Cloud Administrator    
![Job2](/journal/assets/Job2_w2.png "Job2")  
Developer, Cloud Engineer  
![Job3](/journal/assets/Job3_w2.png "Job3")  
Cloud Engineer  
![Job4](/journal/assets/Job4_w2.png "Job4")  
Cloud Administrator  
![Job5](/journal/assets/Job5_w2.png "Job5")  
