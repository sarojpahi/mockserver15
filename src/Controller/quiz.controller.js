const Score = require("../Model/quiz.model");
const Question = require("../Model/question.model");

const quiz = async (req, res) => {
  try {
    const { name, score } = req.body;
    console.log(name, score);
    const data = await Score.create({
      name,
      score,
    });
    res.send("SUCCESS");
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
};
const getScore = async (req, res) => {
  const data = await Score.find().sort({ score: -1 });
  res.send(data);
};
const getData = async (req, res) => {
  let { category, difficulty, amount } = req.query;
  if (category === "1") category = "General Knowledge";
  else if (category === "2") category = "Sports";
  else category = "Geography";
  console.log(category, difficulty, amount);
  try {
    const data = await Question.find({ category, difficulty }).limit(amount);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { quiz, getData, getScore };
