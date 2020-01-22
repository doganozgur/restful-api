const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!')
);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});