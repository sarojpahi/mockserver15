const express = require("express");

const { quiz, getData } = require("../Controller/quiz.controller");

const app = express.Router();

app.post("/", quiz);
app.get("/getData", getData);

module.exports = app;
