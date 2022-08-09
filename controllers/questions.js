const {SERVER_ERROR_CODE, SERVER_ERROR_MESSAGE} = require('../utils/constants');
const {writeError} = require('../utils/functions');
const questions = require('../data/questions.json');

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
  try {
    const data = [];
    res.send(data);
  } catch (error) {
    writeError(error);
    res.status(SERVER_ERROR_CODE).send(SERVER_ERROR_MESSAGE);
  }
};
