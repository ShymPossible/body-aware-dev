const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);
// API_KEY : AIzaSyAEcP1K6XQ0LAWVW23WAk2jTT7sDVIgoyc

const PORT = process.env.PORT || 5000;
app.listen(PORT);
