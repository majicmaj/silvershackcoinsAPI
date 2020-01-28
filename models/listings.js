const mongoose = require("../db/connection");

const ListingsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  blurb: String,
  img: String,
  price: Number,
  quantity: Number,
  available: Boolean
});

module.exports = mongoose.model("Listings", ListingsSchema);
