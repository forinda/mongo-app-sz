const mongoose = require("mongoose");

const config = require("../config");

mongoose
  .connect(config.MONGO_URI, {
    dbName: "todo",
  })
  .then(() => {
    console.info("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error.message);
  });

module.exports = mongoose;
