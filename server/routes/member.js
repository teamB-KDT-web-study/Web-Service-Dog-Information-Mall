const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmember');
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, __dirname + '/../../client/public/profile_img');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(
        null,
        req.body.id + Math.round(Math.random() * 100000) + Date.now() + ext
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 회원 정보 관련
router.get('/checkLogin', controller.checkLogin);

router.post('/login', controller.login); // 로그인 요청
// router.get('/check', controller.check); // 테스트용 : 세션 확인
router.delete('/logout', controller.logout);
router.post('/isExist', controller.isExist);
router.post(
  '/signup',
  upload.fields([
    { name: 'userImg' },
    { name: 'dogImg1' },
    { name: 'dogImg2' },
    { name: 'dogImg3' },
    { name: 'dogImg4' },
    { name: 'dogImg5' },
  ]),
  controller.signup
); // 회원가입 요청
router.post('/showProfile', controller.showProfile);
router.patch('/gradeUp', controller.gradeUp); // 등급 업 요청
router.patch(
  '/profileEdit',
  upload.fields([
    { name: 'userImg' },
    { name: 'dogImg1' },
    { name: 'dogImg2' },
    { name: 'dogImg3' },
    { name: 'dogImg4' },
    { name: 'dogImg5' },
  ]),
  controller.editProfile
); // 프로필 수정 요청

router.delete('/signout', controller.signout); // 회원 탈퇴 요청

module.exports = router;
