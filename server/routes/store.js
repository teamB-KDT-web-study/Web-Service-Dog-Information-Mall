const express = require('express');
const router = express.Router();
const controller = require('../controller/Cstore');

// 스토어 관련
router.post('/addCart', controller.addCart); // 상품 장바구니에 담기
router.post('/showCart', controller.showCart); // 장바구니 보여주기
router.delete('/deleteCart', controller.deleteCart); // 장바구니 상품 삭제
router.get('/', controller.showProduct); // 상품 보여주기
router.get('/:category', controller.showCategory);
router.post('/moreItems', controller.moreItems);
// router.get('/searchProduct', controller.searchProuct); // 상품 검색하기
// router.patch('/updateAmount', controller.updateAmount); // 장바구니 수량 변경하기
module.exports = router;
