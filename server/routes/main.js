const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/getMostLike', controller.showMostLikeContents);

module.exports = router;
