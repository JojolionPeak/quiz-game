const fs = require('fs');

class Leaderboard {

  scores = this.loadScores();

  saveScores(){
    try {
      fs.writeFileSync('./data.json', JSON.stringify(this.scores, null));
    } catch (error) {
      console.log(`Could not load leaderboard. Error message: ${error.message}`);
    };
  }

  addScore(id, score){
    this.scores.push({
      "name": id,
      "score": score,
      "date": new Date()
    });

    this.scores.sort((a, b) => b.score - a.score);
    this.saveScores();
  }

  loadScores() {
    try {
      if (fs.existsSync('./data.json')) {
        const rankings = fs.readFileSync('./data.json', 'utf8');
        return JSON.parse(rankings);
      };
    } catch (error) {
      console.error('Error loading leaderboard:', error.message);
    };
    return [];
  };

  get topScores(){
   return this.scores.slice(0, 5);
  };

  showBoard(){
    console.log('\n✦✦✦ SCOREBOARD ✦✦✦');
    if (this.scores.length === 0){
      console.log('No saved scores yet. Share your score after playing!');
      return;
    };
    this.scores.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry.name}: ${entry.score}`);
    });
    console.log('✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦✦\n');
  };
};

module.exports = { Leaderboard };
