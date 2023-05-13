const express = require('express');
const router = express.Router();
const controller = require('../controller/Cstore');

// 스토어 관련
router.post('/addCart', controller.addCart); // 상품 장바구니에 담기
router.post('/showCart', controller.showCart); // 장바구니 보여주기
router.delete('/deleteCart', controller.deleteCart); // 장바구니 상품 삭제
router.get('/', controller.showProduct); // 상품 보여주기
router.get('/getItem', controller.getItem);
router.get('/moreItems', controller.moreItems); // 상품 더보기
router.get('/searchProduct', controller.searchProduct); // 상품 검색하기

router.get('/:category', controller.showCategory); // 특정 카테고리 상품 보여주기
// router.patch('/updateAmount', controller.updateAmount); // 장바구니 수량 변경하기
module.exports = router;
