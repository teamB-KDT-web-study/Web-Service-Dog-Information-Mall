const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

const memberRouter = require('./routes/member');
app.use('/main', memberRouter);

const storeRouter = require('./routes/store');
app.use('/main/store', storeRouter);

const infoRouter = require('./routes/board');
app.use('/main/board', infoRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
