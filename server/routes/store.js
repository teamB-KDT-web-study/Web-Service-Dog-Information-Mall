const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmember');

// 스토어 관련
// router.post("/addCart", controller.addCart); // 상품 장바구니에 담기
// router.delete("/deleteCart", controller.deleteCart); // 장바구니 상품 삭제

module.exports = router;
