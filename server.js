// Initialise dependences
const express = require("express");
const app = express();
const mysql = require("mysql2");
const dotenv = require("dotenv");
const cors = require("cors");
const { dirname } = require("path");

app.use(express.json());
app.use(cors());
dotenv.config();

// Connect to the MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((error) => {
  if (error) {
    return console.log("Error connecting to db");
  }
  console.log("Connected to db successfully", db.threadId);

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
  app.listen(process.env.PORT, () => {
    console.log(`server is runnig on ${process.env.PORT}`);

    app.get("/", (request, response) => {
      response.send("Server started Successfully");
    });
  });
});
