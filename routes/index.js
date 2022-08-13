const {Router} = require("express");
const questions = require("./questions");
const router = Router();

router.use("/questions", questions);

module.exports = router;
