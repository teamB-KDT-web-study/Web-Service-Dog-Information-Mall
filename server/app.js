const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const multer = require('multer');
const path = require('path');
// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "profile_img/");
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, req.body.id + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
const port = 8000;

app.use(
  '/profile_img',
  express.static(__dirname + '/../client/public/upload_img')
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dotenv.config();

// app.use(
//   session({
//     key: "loginData",
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 1000,
//     },
//   })
// );
app.use(cookieParser());

const mainRouter = require('./routes/main');
app.use('/', mainRouter);

const memberRounter = require('./routes/member');
app.use('/member', memberRounter);

const storeRouter = require('./routes/store');
app.use('/store', storeRouter);

const infoRouter = require('./routes/board');
app.use('/board', infoRouter);

// app.get('*', (req, res) => {
//   res.render();
// })

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
