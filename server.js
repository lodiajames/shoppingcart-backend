require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config");
const seedDatabase = require("./dataSeed.js");
const restaurantRoute = require("./routes/restaurantRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", restaurantRoute);
seedDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
