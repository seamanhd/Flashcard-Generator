//--------------------------- GLOBAL VARIABLES ------------------------------------------

var inquirer = require("inquirer");
var scoreCounter = 0;

//--------------------------- CONSTRUCTOR FUNCTIONS --------------------------------------
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
}

var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.minusCloze = this.text.replace(this.cloze, "......");
}

//---------------------------- CONSTRUCTING QUESTIONS --------------------------------------

var firstQuestion = new ClozeCard ("Laborador Retriever is the most popular dog breed in America", "Laborador Retriever")

var secondQuestion = new ClozeCard ("The Obamas first dog was of the breed Portugese Water Dog", "Portugese Water Dog")

var thirdQuestion = new ClozeCard ("The Newfoundland dog breed has a water resistant coat and webbed feet", "Newfoundland")

var fourthQuestion = new ClozeCard ("Dalmation breed puppies are born pure white and develop spots as they grow older", "Dalmation")

var fifthQuestion = new ClozeCard ("Chow Chow breed dogs are well known for their blue-ish tongues", "Chow Chow")


//------------------------------ GAME FUNCTIONS --------------------------------------------

 var firstQuestionRun = function() {inquirer.prompt([{type: "input", message: firstQuestion.minusCloze, name: "user"}]).then(function(answer){
	if (answer.user ==  firstQuestion.cloze) {
		console.log("Correct!");
		console.log("----------------------------------");
		scoreCounter ++;
		secondQuestionRun();
	} else {
		console.log("oops, the correct answer is: *" + firstQuestion.cloze + "*");
		console.log("----------------------------------");
		secondQuestionRun();
	}
}); 
};
 var secondQuestionRun = function() {
 	inquirer.prompt([{type: "input", message: secondQuestion.minusCloze, name: "user"}]).then(function(answer){
	if (answer.user ==  secondQuestion.cloze) {
		console.log("Correct!");
		console.log("----------------------------------");
		scoreCounter ++;
		thirdQuestionRun();
	} else {
		console.log("oops, the correct answer is: *" + secondQuestion.cloze + "*");
		console.log("----------------------------------");
		thirdQuestionRun();
	}
}) 
};
 var thirdQuestionRun = function () {inquirer.prompt([{type: "input", message: thirdQuestion.minusCloze, name: "user"}]).then(function(answer){
	if (answer.user ==  thirdQuestion.cloze) {
		console.log("Correct!");
		console.log("----------------------------------");
		scoreCounter ++;
		fourthQuestionRun();
	} else {
		console.log("oops, the correct answer is: *" + thirdQuestion.cloze + "*");
		console.log("----------------------------------");
		fourthQuestionRun();
	}
}); 
};

var fourthQuestionRun = function(){ inquirer.prompt([{type: "input", message: fourthQuestion.minusCloze, name: "user"}]).then(function(answer){
	if (answer.user ==  fourthQuestion.cloze) {
		console.log("Correct!");
		console.log("----------------------------------");
		scoreCounter ++;
		fifthQuestionRun();
	} else {
		console.log("oops, the correct answer is: *" + fourthQuestion.cloze + "*");
		console.log("----------------------------------");
		fifthQuestionRun();
	}
});
}; 

 var fifthQuestionRun = function(){ inquirer.prompt([{type: "input", message: fifthQuestion.minusCloze, name: "user"}]).then(function(answer){
	if (answer.user ==  fifthQuestion.cloze) {
		console.log("Correct!");
		console.log("----------------------------------");
		scoreCounter ++;
		console.log("Game Over! Your score is: " + scoreCounter + "/5");
		playAgainRun();
	} else {
		console.log("oops, the correct answer is: *" + fifthQuestion.cloze + "*");
		console.log("----------------------------------");
		console.log("Game Over! Your score is: " + scoreCounter + "/5");
		playAgainRun();
	}
}); 
};

var playAgainRun = function(){
	inquirer.prompt([{type: "confirm", message: "Play Again?", name: "user"}]).then(function(answer){
		if (answer.user === true) {
			console.log("Yay! Let's go!");
			scoreCounter = 0;
			firstQuestionRun();
		}
		else {
			console.log("GOODBYE");
		};
	});
};


//--------------------------------- RUNNING THE GAME! ------------------------------------

console.log("Welcome to the Dog Breed Quiz. Please type your guess and hit enter. Capitalization counts!");
firstQuestionRun();



