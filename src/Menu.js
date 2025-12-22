const prompt = require('prompt-sync')();
const { Quiz } = require('./Quiz');
const { Leaderboard } = require('./Leaderboard');

class Menu {

  isRunning = true;
  board;

  printOptions(){
    console.log('\nMenu:');
    console.log('1. Start Game');
    console.log('2. Leaderboards');
    console.log('3. Exit Game\n');

    const choice = Number(prompt('Pick an option (1-3): '));

    if (choice === 1){
      console.log('\nStarting Game');

      const first = new Quiz;
      first.addQuestion('What is 1 + 1?', ['2',' 3',' 4',' 5'], 2);
      first.addQuestion('What is 3 * 9?', ['18',' 3',' 54',' 27'], 27);
      first.addQuestion('What is 21 / 3?', ['5',' 7',' 9',' 6'], 7);
      first.runQuiz();
    } else if (choice === 2){
      console.clear();
      console.log('Accessing Leaderboards:');
      this.board = new Leaderboard;
      this.board.saveScores();
      this.board.loadScores();
      this.board.showBoard();
    } else if (choice === 3){
      console.log('\nQuitting Game');
      this.isRunning = false;
    };
    if (Number.isNaN(choice) || choice > 3){
      console.log('Invalid entry. Please pick an option (1-3):');
    };
  };
}

module.exports = { Menu }
