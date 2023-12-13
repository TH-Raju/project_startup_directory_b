# [Startup Directory](https://startup-directory-5vyho7snc-th-raju.vercel.app) -Backend

Welcome to the backend of Startup Directory! This project is built using Node.js with Express.js and provides API endpoints for managing startup data.

## Getting Started
### Prerequisites

Make sure you have the following software installed before running the project

- Node.js (>= 14)
- npm 
- MongoDB and Mongoose

## Project Structure

- './': Contains the source code of the Express.js application.
- '/routes' : Define all API routes.
- '/controller' : Implement route handlers and business logic.
- '/service' : hanlde Databse query operation.
-'/model' : Define MongoDB models and Schema.
- '/config' : Connect to the database from '/env' file


## API Endpoints

- /api/v1/startup/ (GET)
- /api/v1/startup/add (POST)
- /api/v1/startup/search?searchTerm=Technology (GET)

### - /api/v1/startup/ (GET)

Get all Data from startup-Directory collection using GET() Method

### /api/v1/startup/add (POST)

Post or add new Startup on Database using POST() method

### - /api/v1/startup/search?searchTerm="search Data" (GET)

Search Data from database depend on Startup Name, Industry Name or sub Industry Name. using GET() method.


## License
This Project Completed by [TH Raju](https://tofajjol-hosen-raju.web.app/)
