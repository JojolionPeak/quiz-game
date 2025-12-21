
class Question {

    answerChoices = []

    constructor(prompt, answerChoices, answerIndex){
        this.prompt = prompt;
        this.answerChoices = answerChoices;
        this.answerIndex = answerIndex;
    }
}

module.exports = { Question };
