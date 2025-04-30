const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.get('/', (req, res) => {
  res.send('Todo API is running');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
// Routes
const todoRouter = require('./routes/todos');
app.use('/api/todos', todoRouter);