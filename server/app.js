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

// const memberRouter = require('./routes/member');
// app.use('/', memberRouter);

// const storeRouter = require('./routes/store');
// app.use('/store', storeRouter);

const infoRouter = require('./routes/board');
app.use('/board', infoRouter);

const mainRouter = require('./routes/main');
app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
