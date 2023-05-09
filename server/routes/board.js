const express = require("express");
const router = express.Router();
const controller = require("../controller/Cboard");

// 게시판 관련
router.get("/", controller.getContents); // 게시판 글 목록 요청

router.get("/:contentId", controller.getContentDetail); // 게시판 글 상세 요청

router.post("/addContent", controller.addContent); // 게시판 글 추가

router.patch("/addLike/:contentId", controller.addLike); // 게시판 글 좋아요 +

router.delete("/deleteContent/:contentId", controller.deleteContent); // 게시판 글 삭제

router.patch("/editContent/:contentId", controller.editContent); // 게시판 글 수정

router.post("/searchContent", controller.searchContent); // 게시판 글 검색

module.exports = router;
