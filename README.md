# WeLoveMovies: Movie Database Application
### Summary
A backend project for Thinkful's engineering immersion program where I assembled the backend portion of a web application focused on setting up a database and building out specific routes so that users can gain access to data about movies, theaters, and reviews. From managing migrations to building complex routes to connecting the pre-existing frontend application to the newly created backend app and deploying the full-stack application as a monorepo to Heroku.

Deployed URL: https://movies-capstone-frontend.herokuapp.com/

### Screenshot
![Screenshot](/screenshot.png)

### Interactivity
- Allows users to increase or decrease ratings on reviews
- Ability to delete a review on a specific movie

### Objectives
Building complex servers and accessing data through a database:

- Install and use common middleware packages
- Receive requests through routes
- Run tests from the command line
- Access relevant information through route and query parameters
- Create an error handler for the case where a route doesn't exist
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to your database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tool
- Deploy your backend server to a cloud service

### General tasks

- The app.js file and server.js file are correctly configured, with the app.js file exporting the application created from Express.
- Use the cors package so that requests from the frontend can correctly reach the backend.
- If a request is made to a route that doesn't exist, the server returns a 404 error.
- If a request is made to a route that exists but the HTTP method is wrong, the server returns a 405 error.
- All of the routes respond with the appropriate status code and use a data key in the response.

### Key Technologies
* PostgreSQL
* Node.js
* Express.js
* Knex.js
* Heroku

### Resources
* https://knexjs.org/
* https://github.com/dbeaver/dbeaver/wiki
* https://expressjs.com/en/guide/routing.html
* https://www.postgresqltutorial.com/
* https://github.com/Thinkful-Ed/starter-movie-front-end
