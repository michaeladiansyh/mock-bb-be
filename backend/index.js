require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOption');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/posts', require('./routes/postRoute'));

mongoose.connection.once('open', () => {
  console.log('connect to MongoDB');
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
