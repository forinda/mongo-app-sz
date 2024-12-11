require("dotenv").config();


const config = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/todo",
  PORT: process.env.PORT || 3000,
};

module.exports = config;
