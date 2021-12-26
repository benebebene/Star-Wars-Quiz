function Quiz(questions)
{
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function()
{
	return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer)
{
	if(this.getQuestionIndex().correctAnswer(answer))
	{
		this.score += 100;
		
	}
	this.questionIndex++;
}

Quiz.prototype.endQuiz = function ()
{
	return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer)
{
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice)
{
	return this.answer === choice;
}

function fill()
{
	if(quiz.endQuiz())
	{
		showScore();
	}
	else
	{
		var quest = document.getElementById("question");
		quest.innerHTML = quiz.getQuestionIndex().text;
		
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++)
		{
			var temp = i+1;
			var elem = document.getElementById("choice0" + temp);
			elem.innerHTML = choices[i];
			guess("button0" + temp, choices[i]);
		}
		showProgress();
		
		var nextButton = document.getElementById("nextQ");
		
		if(quiz.questionIndex + 1 === questions.length)
		{
			nextButton.innerHTML = "Ergebnis anzeigen";
		}
		else
		{
			nextButton.innerHTML = "Nächste Frage";
		}
	}
};


function guess(id, guess)
{
	var button = document.getElementById(id);
	button.onclick = function ()
	{
		quiz.guess(guess);
		fill();
	}
};

function showProgress() 
{
	var currQNumber = quiz.questionIndex + 1;
	var elem = document.getElementById("progress");
	elem.innerHTML = "Frage " + currQNumber + " von " + quiz.questions.length;
};

function showScore()
{
	var end = "<h1>Ergebnis</h2>";
	var max = quiz.questions.length * 100;
	end += "<h2 id='score'>Deine Punkte: " + quiz.score + " von " + max + "</h2>";
	var elem = document.getElementById("quiz");
	elem.innerHTML = end;
};

var questions =
	[
		new Question("Hallo", ["a", "b", "c"], "a"),
		new Question("ABC", ["a", "b", "c"], "b")
	];
	
var quiz = new Quiz(questions);

fill();
	
	
	
	
	
	
	
	
	
	
	
	
	
	