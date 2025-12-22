const { Question } = require('./Question');
const prompt = require('prompt-sync')();
const { Leaderboard } = require('./Leaderboard');

class Quiz {

  #questions = [];
  score;
  numCorrect = 0
  board = new Leaderboard;

  addQuestion(prompt, answerChoices, answerNum){
    this.#questions.push(new Question(prompt, answerChoices, answerNum));
  };

  get questionsArr(){
    let copy = this.#questions.map((el) => el);
    return copy;
  };

  runQuiz(){
    for (let i = 0; i < this.#questions.length; i++){
      console.clear();
      console.log(`\n${this.#questions[i].prompt}`);
      console.log(`\n${this.#questions[i].answerChoices}`);

      const choice = Number(prompt('\nType the correct answer: '));

      if (Number.isNaN(choice)){
        console.log('\nInvalid entry. Please enter a numerical answer');
      };
      if (choice !== this.#questions[i].answerNum){
        console.log('Incorrect Answer!');
        continue;
      } else {
        this.numCorrect++;
        console.log(`Correct Answer! You have ${this.numCorrect} questions(s) correct.`);
      };
    };
    console.clear();
    const id = prompt('Please enter your name: ')
    let ratio = this.numCorrect / this.#questions.length;
    this.score = (ratio.toFixed(2)) * 100;
    this.board.addScore(id, this.score)
    console.log(`\nYour final score is ${this.score}%!`)
    return
  };
}
//const id = prompt('Please enter your name: ');
module.exports = {Quiz}
