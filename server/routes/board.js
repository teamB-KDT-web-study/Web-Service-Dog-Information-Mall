const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmember");

// 게시판 관련
router.get("/", controller.getContents); // 게시판 글 목록 요청

router.post("/:contentId", controller.getContentDetail); // 게시판 글 상세 요청

router.post("/addContent", controller.addContent); // 게시판 글 추가

router.post("/addLike", controller.addLike); // 게시판 글 좋아요

router.delete("/deleteContent", controller.deleteContent); // 게시판 글 삭제

router.patch("/editContent", controller.editContent); // 게시판 글 수정

module.exports = router;
