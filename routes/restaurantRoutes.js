const express = require("express");
const Restaurant = require("../models/restModel.js");
const router = express.Router();

router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
