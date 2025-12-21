class Question {
  prompt;
  answerChoices = [];
  answerNum;

  constructor(prompt, answerChoices, answerNum){
    this.prompt = prompt;
    this.answerChoices = answerChoices;
    this.answerNum = answerNum;
  }
}

module.exports = { Question };
