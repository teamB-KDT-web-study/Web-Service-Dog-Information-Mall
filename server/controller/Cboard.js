const models = require("../models");
const { Op } = require("sequelize");

exports.getContents = async (req, res) => {
  // 전체 게시판 목록 불러옴
  try {
    const result = await models.Board.findAll({ raw: true });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.getContentDetail = async (req, res) => {
  // 글의 상세 내용을 보여줌 : 클릭한 contentId와 board 테이블의 id 가 같으면
  try {
    const result = await models.Board.findOne({
      where: { id: { [Op.eq]: req.params.contentId } },
      raw: true,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.addContent = async (req, res) => {
  // 새로운 글을 게시판 목록에 추가
  try {
    const result = await models.Board.create({
      user_id: req.body.user_id,
      title: req.body.title,
      body: req.body.body,
      date: req.body.date,
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

exports.addLike = async (req, res) => {
  try {
    const result = await models.Board.update(
      {
        recommend_count: req.body.recommend_count + 1, // 기존 값 그대로 넘겨주면 +1 더해서 DB에 저장
      },
      {
        where: {
          id: { [Op.eq]: req.params.contentId },
        },
      }
    );
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};

exports.addView = async (req, res) => {
  try {
    const result = await models.Board.update(
      {
        view_count: req.body.view_count + 1, // 기존 값 그대로 넘겨주면 +1 더해서 DB에 저장
      },
      {
        where: {
          id: { [Op.eq]: req.params.contentId },
        },
      }
    );
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};

exports.deleteContent = async (req, res) => {
  // 요청한 Id에 해당하는 글 삭제
  try {
    const result = await models.Board.destroy({
      where: {
        id: { [Op.eq]: req.params.contentId },
      },
    });
    res.send(true);
  } catch (err) {
    res.send(err);
  }
};

exports.editContent = async (req, res) => {
  // 제목, 내용, 날짜 수정. 그 외의 요소는 수정 x
  try {
    const result = await models.Board.update(
      {
        title: req.body.title,
        body: req.body.body,
        date: req.body.date,
      },
      {
        where: {
          id: { [Op.eq]: req.params.contentId },
        },
      }
    );
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
