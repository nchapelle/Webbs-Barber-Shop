const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require ('morgan');
const compression = require('compression');
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

const PORT = process.env.PORT || 6969;

//stating we start at build location
app.use(express.static("client/build"));

//Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(compression());


//DB config
//connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist")
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


app.listen(PORT, () => console.log("Server Running on " + PORT));
