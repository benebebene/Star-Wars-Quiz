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

function decryptAnswer(string)
{
	return CryptoJS.AES.decrypt(string, "Ahsoka").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Wie hieß Jabbas Rancor?", 
					["Onchi", 
					"Muchi", 
					"Nakare", 
					"Ruck"],
					decryptAnswer("U2FsdGVkX18IYTMcXCj2ZA4LuAM8ugJLkALks9XgGrY=")),
		new Question("Was ist Großadmiral Thrawns vollständiger Name?", 
					["Th'rawnd'ir",
					"Disiik Mesta Thrwan",
					"Mitth'raw'nuruodo",
					"Korane Thrawn Poli'is"],
					decryptAnswer("U2FsdGVkX19XOuNObr6PK5bsHiVNrGuKnLCLfzlek5j26p/oFOkptHyY7dGQgXDW")),
		new Question("Wer benutzte nie den Decknamen Fulcrum?", 
					["Ahsoka Tano",
					"Alexsandr Kallus",
					"Saw Gerrera",
					"Hera Syndulla"],
					decryptAnswer("U2FsdGVkX1+mrwRb9V41ahznszcC78R/Z/x9JtppY90=")),
		new Question("Welcher Klon hat die Wahrheit über die Inhibitorchips entdeckt?",
					["CT-7567",
					"CT-5555",
					"CC-2224",
					"CC-3636"],
					decryptAnswer("U2FsdGVkX1+ONl0+bzHVpUujIZkMrFVVBTkeu3DwMjA=")),
		new Question("Mit welchem weiteren Jedi wollte Revan die Galaxis erobern?",
					["Juhani",
					"Malak",
					"Jolee Bindo",
					"Bastila Shan"],
					decryptAnswer("U2FsdGVkX1+7o/QS+GYskASXC/OGbD2S+jSZTjVKkvs=")),
		new Question("Wie heißt Luke Skywalkers Frau in Star Wars Legends?",
					["Vestara Khai",
					"Tionne Solusar",
					"Mara Jade",
					"Visas Marr"],
					decryptAnswer("U2FsdGVkX1/M5ZBPWCeu14pZJ8DAGvi92XFdRx8aqF0=")),
		new Question("Was ist der vollständige Name von Darth Vaders Schüler in The Force Unleashed?",
					["Galen Marek",
					"Dash Rendar",
					"Kyle Katarn",
					"Cal Kestis"],
					decryptAnswer("U2FsdGVkX19w5gYf+KH0SpdNNmXaM5wjvWx1sBxNXGI=")),
		new Question("Welche/r Sith gehört nicht zum Sith-Triumvirat?",
					["Darth Talon",
					"Darth Traya",
					"Darth Sion",
					"Dart Nihilus"],
					decryptAnswer("U2FsdGVkX1+jldcYpxLEN5pnCqczZldKM0833Tk6UM8=")),
		new Question("Wie hieß der Imperator des Sith-Imperiums?",
					["Valorum",
					"Krayt",
					"Zaalbar",
					"Valkorion"],
					decryptAnswer("U2FsdGVkX18+8PVXzVEOruWJZpJBc0kJN5fW0O7dD48=")),
		new Question("Wer war nie rechtmäßiger Besitzer des Darksabers?",
					["Tarre Vizla",
					"Darth Maul",
					"Ahsoka Tano",
					"Sabine Wren"],
					decryptAnswer("U2FsdGVkX19VqYmEzv7799wZvHwJNZ09TcdlSdCgq1Y="))
	];

export{questions};