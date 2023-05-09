const models = require('../models');

exports.showMostLikeContents = async (req, res) => {
  // board 테이블 게시글 중 좋아요 top4를 가져옴
  try {
    const result = await models.Board.findAll({
      limit: 4,
      order: [['like_count', 'DESC']],
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
