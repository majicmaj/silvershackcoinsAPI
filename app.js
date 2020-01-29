var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// app.use(logger("dev"));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.set("port", 8123);

var listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port " + listener.address().port);
});
