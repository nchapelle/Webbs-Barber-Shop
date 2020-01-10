const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require ('morgan');
const compression = require('compression');
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();

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
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 6969;

app.listen(port, () => console.log("Server Running on " + port));
