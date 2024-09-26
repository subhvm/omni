const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const user = require('./routes/user');


app.use(express.json());


mongoose.connect(process.env.mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/api/user', user);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 