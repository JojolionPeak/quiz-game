const prompt = require('prompt-sync')();
const timer = require('./index');
const { Quiz } = require('./Quiz');

class Menu {

  isRunning = true;

  printOptions(){
    console.log('\nMenu:');
    console.log('1. Start Game');
    console.log('2. Leaderboards');
    console.log('3. Exit Game\n');

    const choice = Number(prompt('Pick an option (1-3): '));

    if (choice === 1){
      //question creation and display
      console.log('\nStarting Game');

      const first = new Quiz;
      first.addQuestion('What is 1 + 1?', ['2',' 3',' 4',' 5'], 2);
      first.addQuestion('What is 3 * 9?', ['18',' 3',' 54',' 27'], 27);
      first.addQuestion('What is 21 / 3?', ['5',' 7',' 9',' 6'], 7);
      console.clear();
      first.runQuiz();
      console.log('1. Retry quiz');
      console.log('2. Back to Main Menu');

      let option = Number(prompt('Pick an option (1 or 2): '));

      if (option === 1){
        console.clear();
        first.runQuiz();
      } else if (option === 2){
        console.clear();
        this.printOptions();
      }
    } else if (choice === 2){
      console.log('Showing Leaderboards');
    } else if (choice === 3){
      console.log('\nQuitting Game');
      timer;
      this.isRunning = false;
    };
    if (Number.isNaN(choice) || choice > 3){
      console.log('Invalid entry. Please pick an option (1-3):');
    };
  };
}

module.exports = { Menu }
