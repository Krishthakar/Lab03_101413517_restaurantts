const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restautrant");

// Get all restaurants
router.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get restaurants by cuisine
router.get("/restaurants/cuisine/:cuisine", async (req, res) => {
    try {
        const cuisineType = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisine: cuisineType });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get restaurants sorted by restaurant_id
router.get("/restaurants", async (req, res) => {
    try {
        const sortBy = req.query.sortBy === "ASC" ? 1 : -1;
        const restaurants = await Restaurant.find({}, { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }).sort({ restaurant_id: sortBy });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get restaurants with cuisine = 'Delicatessen' and city != 'Brooklyn'
router.get("/restaurants/Delicatessen", async (req, res) => {
    try {
        const restaurants = await Restaurant.find(
            { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
            { _id: 0, cuisine: 1, name: 1, city: 1 }
        ).sort({ name: 1 });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
