const Score = require("../Model/quiz.model");
const Question = require("../Model/question.model");

const quiz = async (req, res) => {
  const { name, level } = req.body;
};
const getData = async (req, res) => {
  const { category, difficulty, amount } = req.query;
  try {
    if (category === "1") category = "General Knowledge";
    else if (category === "2") category = "";
    console.log(category, difficulty, amount);
    const data = await Question.find().limit(amount);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { quiz, getData };
