const {Router} = require('express');
const questionsController = require('../controllers/questions');

const router = Router();

// @@access: public
// @@description: returns all questions
// @@route: GET /api/v1/questions/
router.get('/', questionsController.getQuestions);

// @@access: public
// @@description: takes answers and returns result
// @@route: POST /api/v1/questions/
router.post('/', questionsController.submitQuestions);

module.exports = router;

