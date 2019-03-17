const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);
// API_KEY : AIzaSyAEcP1K6XQ0LAWVW23WAk2jTT7sDVIgoyc

const PORT = process.env.PORT || 5000;
app.listen(PORT);
