const { Menu } = require('./menu.js');
const prompt = require('prompt-sync')();

 const startApp = () => {
   console.clear();
   const menu = new Menu;
   console.log(`Welcome to "Jojo's First Quiz"!`);
   while (menu.isRunning){
    menu.showMenu();
   };
   console.log("\nGoodbye!");
 }

 startApp();
