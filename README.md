# Lab2 - Task1: Hashing Demo
In this task, you will get a demonstration of how hashing can help in securely storing data. In particular, we see the use case of storing users’ password to perform authentication. You will also learn how to intercept traffic using Burp Suite.

## Project Preparation
1.	Clone or download the code from the following GitHub repo: https://github.com/houcine1amraoui/lab2-task1-hashing-demo  
2.	Open the project folder with VS Code.
3.	Open the integrated terminal and run “npm install” command to install the dependencies.
4.	Run “npm run start” to run the server (using nodemon).

## Questions: Part 1
1.	Use Postman to send a post request to the server with following request body: username=”mohamed-msila” and password=”test123”. Explain what has been displayed and why.
2.	Now, try to find the correct password by inspecting the server-side code, set the password to such a value, then send the post request again. Explain what has been displayed and why.
3.	Which threat does hashing protect from in the case of storing hashed passwords instead of clear-text?

## Questions: Part 2
4.	Open Burp Suite and check its proxy configuration (i.e., IP address and port number).
5.	Open Postman and set its proxy configuration to the same Burp Suite’s IP address and port number. 
6.	Use Postman to send the same request sent before (with the incorrect password=”test123”), then inspect what has been intercepted by Burp Suite and how.
7.	Now, use Postman to send the same request by with the correct password, then try to modify it by Burps Suite.


