### Scalable Code Execution Environment - CodeRunnerX

CodeRunnerX: A Scalable, Dockerized Code Execution Sandbox as the name suggests, is an online code executor like seen on Leetcode, etc. For the project, we have implemented an _**infinitely scalable**_ code executor to run a code snippet. It will create a new file for each code input, execute it and returns the output. It supports major languages, i.e., C/C++, Python, Javascipt, Java and can even be extended to support more languages.

## UI
![rce-dark](https://github.com/user-attachments/assets/70eab658-65b3-4996-8237-bc472456480e)
![rce-light](https://github.com/user-attachments/assets/449dceb4-9192-4a73-9d86-2184afc7b9a2)

## Concepts
- Application is made infinitely scalable by utilizing the concept of serverless architecture, which is implemented with the help of the Serverless Framework and AWS Lambda Functions. 
- ```exec``` from NodeJS Child process module was used to execute the code snippets in a shell.
- Docker was used to containerize the application which contains all the required dependencies and that image is utilized for AWS Lambda functions.
- A CI/CD pipeline was setup using Github Actions for quick deployment.
![flow2](https://github.com/user-attachments/assets/5766e962-ce14-4fa3-9142-c3412027ebf9)

## Hosted URL
#### Frontend
- [Hosted Link](https://rce-nine.vercel.app)
#### Backend
- [Hosted Link](https://3m0vak6ytg.execute-api.ap-south-1.amazonaws.com/default/test)
## Features Implemented

- Infinitely Scalable Code
- Code Sanitization
- Time limited execution
- Drag and Drop code and input
- Download code snippet
- Resize the font of the editor
- Light/Dark Mode
- Code Suggestion and Autocompletion
## Packages and Their Purpose

| **Tool/Package**      | **Description**                          |
|------------------------|------------------------------------------|
| 🐳 **Docker**          | Build and manage containerized apps      |
| ⚡ **Serverless Framework** | Framework for serverless applications   |
| 🖊️ **Ace Editor**       | An online IDE and code editor            |
| 🖥️ **AWS Lambda**       | Serverless compute service              |
| 🌐 **Next.js**          | Framework for frontend development       |
| 📊 **CloudWatch**       | Monitor and log Lambda function activity |
| 🔗 **API Gateway**      | Manage and trigger Lambda APIs           |
 


