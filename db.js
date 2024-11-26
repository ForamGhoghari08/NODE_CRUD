// IMPORTING MONGOOSE 

const mongoose = require("mongoose");

// CONNECTING TO THE DATABASE 

const dbconnect = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/users"
  );
  console.log("Connected to the Databae");
};


// EXPORTING THE DBCONNECT 

module.exports = dbconnect 