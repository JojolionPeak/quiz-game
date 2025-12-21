const prompt = require('prompt-sync')();

class Menu {

    isRunning = true;

    showMenu(){
        console.log('\nMenu:');
        console.log('1. Start Game');
        console.log('2. Leaderboards');
        console.log('3. Exit Game\n');

        const choice = Number(prompt('Pick an option (1-3): '));

        if (choice === 1){
            console.log('Starting Game');
        }
        if (choice === 2){
            console.log('Showing Leaderboards');
        }
        if (choice === 3){
            console.log('Quitting Game');
            this.isRunning = false;
        }
        if (isNaN(choice) || choice > 3){
            console.log('Invalid entry. Please pick an option (1-3):');
        }
    };
}

module.exports = { Menu }
