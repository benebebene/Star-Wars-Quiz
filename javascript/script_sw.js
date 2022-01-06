import {questions} from './questions/questions_sw.js';

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
            var elem2 = document.getElementById("qchoice0" + temp);
            elem2.checked = false;
			elem.style.borderColor = "#444";
			elem.innerHTML = choices[i];	
			document.getElementById("qchoice0" + temp).setAttribute('value', choices[i]);
			
            check("check");
			guess("next");
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

function choice(elem)
{
	choicesArr.push(elem);	
	return choicesArr;
};

function check(id)
{
	var button = document.getElementById(id);
	button.onclick = function ()
	{		
		var choices = quiz.getQuestionIndex().choices;
		var selected = document.querySelector('input[name="qchoice"]:checked').value;
		if(quiz.getQuestionIndex().correctAnswer(selected))
		{
			for(var i = 1; i < choices.length + 1; i++)
			{
				var answer = document.getElementById("choice0" + i).innerHTML;
				if(quiz.getQuestionIndex().correctAnswer(answer))
				{
					document.getElementById("choice0" + i).style.boxShadow = "0px 0px 50px green";
				}
			}
		}
		else
		{
			for(var i = 1; i < choices.length + 1; i++)
			{
				var answer = document.getElementById("choice0" + i).innerHTML;
				if(quiz.getQuestionIndex().correctAnswer(answer) === false &&
					document.querySelector('input[name="qchoice"]:checked'))
				{	
					var id = document.querySelector('input[name="qchoice"]:checked').id;
					document.querySelector('label[for=' + id + ']').style.boxShadow = "0px 0px 50px red";
				}
			}
		}
		for(var i = 1; i < choices.length + 1; i++)
		{
			var input = document.getElementById("qchoice0" + i);
			input.disabled = true;
		}
	}
};

function guess(id)
{	
	var choices = quiz.getQuestionIndex().choices;
	var button = document.getElementById(id);
	button.onclick = function ()
	{
		for(var i = 1; i < choices.length + 1; i++)
		{
			document.getElementById("choice0" + i).style.boxShadow = "none";
			var input = document.getElementById("qchoice0" + i);
			input.disabled = false;
		}
		var selected = document.querySelector('input[name="qchoice"]:checked').value;
		choice(selected);
		quiz.guess(selected);
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
	var end = "<div class='space'><div class='space'></div><div class='space'></div><h1>Ergebnis</h2>";
	var max = quiz.questions.length * 100;
	end += "<h2 id='score'>Deine Punkte: " + quiz.score + " von " + max + "</h2>";
	
	var answerButton = "<br><button id='answerButton'><span id='answerSpan'>Lösungen anzeigen</span></button>";
	
	end += answerButton;
	
	var elem = document.getElementById("quiz");
	elem.innerHTML = end;
	
	var button = document.getElementById("answerButton");
    button.checked = false;
	button.onclick = function ()
	{
		showAnswers();
	}	
};

function showAnswers()
{
	var answers = "</div><h1>Lösungen</h1>"
	var max = quiz.questions.length * 100;
	answers += "<h2 id='score'>Deine Punkte: " + quiz.score + " von " + max + "</h2>";
    var homeButton = "<a href='.\\index.html'><img id='home' src='./img/home.svg'></a>";
    answers += homeButton;
	var answerTableStart = "<table id='answerTable'><tr><td id='questionTD'>Frage</td><td>Deine Antwort</td><td>Richtige Antwort</td></tr>"
	answers += answerTableStart;
	for(var i = 0; i < choicesArr.length; i++)
	{
		answers += "<tr><td>" + questions[i].text + "</td><td id='answerChoice0" + i + "'>" + choicesArr[i] + "</td><td id='answer0" + i + "'>" + questions[i].answer + "</td></tr>";
	}
	var answerTableEnd = "</table>";
	answers += answerTableEnd;
	
	var elem = document.getElementById("quiz");
	elem.innerHTML = answers;

    positionButton(document.getElementById("home"));
	color(document.getElementById("answerTable"));

	var container = document.getElementsByClassName("vertical");
	container.style.top = "80%";
};

function color(table)
{
	for (let i in table.rows) 
	{
		if(document.getElementById("answerChoice0" + i).innerText === document.getElementById("answer0" + i).innerText)
		{
			document.getElementById("answerChoice0" + i).style.color = "green";
		}
		else
		{
			document.getElementById("answerChoice0" + i).style.color = "red";
		}	
	}
};

function positionButton(button)
{
    button.style.width = "76px";
    button.style.height = "80px";
    button.style.position = "absolute";
    button.style.left = "10%";
    button.style.top = "10%";
};

var choicesArr = [];

var quiz = new Quiz(questions);

fill();
	