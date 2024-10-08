const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001;
const User = require("../routes/user");
const Plan = require("../routes/plan");
const Line = require("../routes/line");
const cors  = require('cors')

require("dotenv").config();

app.use(express.json());


mongoose
  .connect(process.env.mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.use(cors());

app.get("/", (req, res) => {
  res.send("BACKEND SERVICE UP. UNDER MAINTENANCE");
}); 
app.use("/api/user", User);
app.use("/api/plan", Plan);
app.use("/api/line", Line);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
