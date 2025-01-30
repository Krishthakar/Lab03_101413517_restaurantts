const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    cuisine: { type: String, required: true },
    city: { type: String, required: true },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
