let Game = function(word){
	this.guesses = 10;
	this.word = word;
	this.incorrect = [];
	this.correct = [];
	this.completed = false;
	this.handleWin = function(){

	},
	this.handleLoss = function(){

	},
	this.start = function(){

	},
	this.letterGuessed = function(){

	},
	this.checkLetter = function(){

	},
	this.handleCorrect = function(){

	},
	this.handleIncorrect = function(){

	},
	this.handleGuessed = function(){

	},
	this.addLetter = function(letter){
		// let letter = new Letter(letter);
		if (this.checkLetter && this.letterGuessed) {
			this.correct.push(letter)
		} else {
			this.incorrect.push(letter);
		}
	};
};

let myGame = new Game("Blue");

myGame.start();
