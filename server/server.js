const express = require("express");
// const db = require("./config/db");
require("dotenv").config();

// Port set in .env
// Port 8080 as fallback
const PORT = process.env.PORT || 8080;

const app = express();

//Bodyparser middleware
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Testing...." });
});

// import & use routes
app.use("/api/packages", require("./routes/packages-routes"));
// ^^ any request that starts with http://localhost:5000/api/packages ... 
app.use("/api/services", require("./routes/services-routes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
