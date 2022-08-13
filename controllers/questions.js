const {SERVER_ERROR_CODE, SERVER_ERROR_MESSAGE} = require("../utils/constants");
const {writeError} = require("../utils/functions");
const questions = require("../data/questions.json");

// returns all questions
exports.getQuestions = async (req, res) => {
  try {
    const data = questions;
    res.send(data);
  } catch (error) {
    writeError(error);
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_MESSAGE);
  }
};

// takes answers and returns result
exports.submitQuestions = async (req, res) => {
  const {answers} = req.body;

  try {
    const data = answers.filter((answer) => answer === "introvert").
      length > answers.length / 2 ?
      "you are an introvert" : "you are an extrovert";
    res.send(data);
  } catch (error) {
    writeError(error);
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_MESSAGE);
  }
};
