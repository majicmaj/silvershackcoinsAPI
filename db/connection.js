const mongoose = require("mongoose");

let mongoURI = process.env.DB_URL || "mongodb://localhost/lol-builder";

mongoose.connect(mongoURI, { useNewUrlParser: true });
module.exports = mongoose;
