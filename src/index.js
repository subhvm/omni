const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5001;
const User = require("../routes/user");
const Plan = require("../routes/plan");
const Line = require("../routes/line");
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.get("/", (req, res) => {
  res.send("Omni is Verizon's integrated customer support platform that streamlines communication across multiple channels, including phone, chat, and email. It enables customer service representatives to handle interactions from different platforms in one unified system, providing a seamless and efficient experience for both the agent and the customer. Omni ensures that customer issues are tracked in real-time, allowing for quick and accurate resolution. With advanced analytics and automated routing, it directs inquiries to the appropriate departments, reducing wait times and improving overall service quality. Its intuitive interface and powerful infrastructure make Omni essential to Verizon’s high-standard customer support operations.");
}); 
app.use("/api/user", User);
app.use("/api/plan", Plan);
app.use("/api/line", Line);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
