const { Question } = require('./Question');
const prompt = require('prompt-sync')();
const timer = require('./index');

class Quiz {

  #questions = [];
  score;
  numCorrect = 0

  addQuestion(prompt, answerChoices, answerNum){
    this.#questions.push(new Question(prompt, answerChoices, answerNum));
  };

  get questionsArr(){
    let copy = this.#questions.map((el) => el);
    return copy;
  };

  runQuiz(){
    for (let i = 0; i < this.#questions.length; i++){
      console.log(`\n${this.#questions[i].prompt}`);
      console.log(`\n${this.#questions[i].answerChoices}`);

      const choice = Number(prompt('\nType the correct answer: '));

      if (Number.isNaN(choice)){
        console.log('\nInvalid entry. Please enter a numerical answer');
        timer;
      };
      if (choice !== this.#questions[i].answerNum){
        console.log('Incorrect Answer!');
        timer;
        continue;
      } else {
        this.numCorrect++;
        console.log(`Correct Answer! You have ${this.numCorrect} questions(s) correct.`);
        timer;
      };
    };
    let ratio = this.numCorrect / this.#questions.length;
    this.score = (ratio.toFixed(2)) * 100;
    console.log(`\nYour final score is ${this.score}%!`)
    this.score = 0; this.numCorrect = 0;
    return;
  };
}

module.exports = { Quiz }
