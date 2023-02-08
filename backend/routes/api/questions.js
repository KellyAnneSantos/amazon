const express = require("express");

const router = express.Router();

const { Question } = require("../../db/models");

router.get("/:questionId", async (req, res) => {
  let { questionId } = req.params;
  questionId = parseInt(questionId);

  let question = await Question.findByPk(questionId, {
    include: [
      {
        model: Answer,
        include: [{ model: User }],
      },
    ],
  });

  if (!question) {
    res.status(404);
    return res.json({
      message: "Question couldn't be found",
      statusCode: 404,
    });
  }

  return res.json(question);
});

module.exports = router;
