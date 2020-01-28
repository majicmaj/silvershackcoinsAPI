const mongoose = require("mongoose");
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI =
    "mongodb+srv://dan:c0ins89@cluster0-pp109.mongodb.net/test?retryWrites=true&w=majority";
} else {
  mongoURI = "mongodb://localhost/ssc";
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

module.exports = mongoose;
