const express = require("express");

const { quiz, getData, getScore } = require("../Controller/quiz.controller");

const app = express.Router();

app.post("/", quiz);
app.get("/", getScore);
app.get("/getData", getData);

module.exports = app;
