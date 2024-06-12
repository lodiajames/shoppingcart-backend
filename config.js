const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to MONGODB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

module.exports = connectDB;
