This is a simple fraction calculation web application developed by Penelope Schankula as part of a technical assessment for Censys. 

## Intro and Startup
To run this project successfully please ensure that you have the necessary dependencies to run docker-compose commands.

The backend for this application is a simple Node.js server which runs on port 3000 by default. 
The frontend for this application is a Next.js client which runs on port 8000 by default.
Please ensure both of these ports are available or you may need to modify the `docker-compose.yml`, each `Dockerfile` and the API call in `frenzy/src/app/page.js`.

## Running this application
Run ```docker-compose up --build``` to initiate both the frontend and backend containers.
Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

