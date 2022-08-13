# Getting Started

This project is a node js project for testing if a user is an introvert or an extrovert

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to start the application.

The app uses nodemon and will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner.\

### `npm start`

Runs the app in production mode.\

### Deployment

The application uses docker to containerize the application.
Run `docker image build -t jequex/psychology-backend .` to build the image
Run `docker container run -it -p 5000:5000 jequex/psychology-backend` to run the production app
