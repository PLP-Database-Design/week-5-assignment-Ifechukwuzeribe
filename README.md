# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   
   // Question 1 goes here
   // 1. Retrieve all patients
  // Create a GET endpoint that retrieves all patients and displays their:

  // patient_id
  // first_name
  // last_name
  // date_of_birth

  app.get("/get-patients", (request, response) => {
    const getPatients =
      "Select patient_id, first_name, last_name, date_of_birth FROM patients";

    db.query(getPatients, (error, results) => {
      if (error) {
        return response
          .status(500)
          .send(
            "Failed to fetch the patients Please check if the database connection is working or if there’s an issue with the query."
          );
      }
      response.status(200).send(results);
    });
  });


   // Question 2 goes here
   // 2. Retrieve all providers
  // Create a GET endpoint that displays all providers with their:

  // first_name
  // last_name
  // provider_specialty

  app.get("/get-providers", (request, response) => {
    const getProviders =
      "Select first_name, last_name, provider_specialty FROM providers";

    db.query(getProviders, (error, results) => {
      if (error) {
        return response
          .status(500)
          .send(
            "Failed to fetch the providers Please check if the database connection is working or if there’s an issue with the query."
          );
      }
      response.status(200).send(results);
    });
  });

   // Question 3 goes here
   // 3. Filter patients by First Name
  // Create a GET endpoint that retrieves all patients by their first name

  app.get("/patients/firstname", (request, response) => {
    const getFirstName = "Select first_name FROM patients";

    db.query(getFirstName, (error, results) => {
      if (error) {
        return response
          .status(500)
          .send(
            "Failed to fetch the patients by their first name Please check if the database connection is working or if there’s an issue with the query."
          );
      }
      response.status(200).send(results);
    });
  });

   // Question 4 goes here
   // 4. Retrieve all providers by their specialty
  // Create a GET endpoint that retrieves all providers by their specialty

  app.get("/provider_specialty", (request, response) => {
    const getProviderSpecialty = "Select provider_specialty FROM providers";

    db.query(getProviderSpecialty, (error, results) => {
      if (error) {
        return response
          .status(500)
          .send(
            "Failed to fetch providers by their specialty. Please check if the database connection is working or if there’s an issue with the query."
          );
      }
      response.status(200).send(results);
    });
  });
   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository
