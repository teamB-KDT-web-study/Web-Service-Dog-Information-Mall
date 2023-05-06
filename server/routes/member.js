const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmember');

// 회원 정보 관련

router.post('/login', controller.login); // 로그인 요청
router.get('/check', controller.check); // 테스트용 : 세션 확인
router.get('/checkLogin', controller.checkLogin);
router.post('/signup', controller.signup); // 회원가입 요청

router.patch('/profileEdit', controller.editProfile); // 프로필 수정 요청

router.delete('/signout', controller.signout); // 회원 탈퇴 요청

module.exports = router;
