const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const User = require('./routes/user');
const Plan = require('./routes/plan');
const Line = require('./routes/Line');
require('dotenv').config();

app.use(express.json());


mongoose.connect(process.env.mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/api/user', User);
app.use('/api/plan', Plan);
app.use('/api/line', Line)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 