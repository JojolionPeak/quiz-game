const { Menu } = require('./menu.js');

const timer = setTimeout( function() {
  console.clear();
},3000);

const startApp = () => {
  console.clear();
  const menu = new Menu;
  console.log(`Welcome to "Jojo's First Quiz"!`);
  while (menu.isRunning){
    menu.printOptions();
  };
  timer;
  console.log("Goodbye!")
}

startApp();

module.exports = { timer }
