const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};

// -- Edit --
// 1
// add : { useUnifiedTopology:true }
// src : https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated
