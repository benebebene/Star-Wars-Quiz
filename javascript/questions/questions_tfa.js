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
	return CryptoJS.AES.decrypt(string, "Rey").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Was ist Finns Sturmtruppennummer?", 
					["FN-2187", 
					"FN-2859", 
					"FM-4165", 
					"FF-7142"],
					decryptAnswer("U2FsdGVkX1+f02c2/L+q4PqJM93SufS59c3nze1r628=")),
		new Question("Wie viel bietet der Schrotthändler Rey für BB-8?", 
					["40 Portionen",
					"30 Portionen",
					"60 Portionen",
					"70 Portionen"],
					decryptAnswer("U2FsdGVkX1/k3Fa6GHMZbIVAhh+e2Yc08B3vu6LlWTI=")),
		new Question("Wie heißt der Schrotthändler?", 
					["Munka Gengi",
					"Unkar Plutt",
					"Sarr Polis",
					"Ri'ik Lamdar"],
					decryptAnswer("U2FsdGVkX1+RgKoVybb0lY3uSYaDgymD3AhwjKpWq3Y=")),
		new Question("Welche Kreatur trinkt mit Finn auf Jakku aus dem gleichen Wassertrog?",
					["Chiss",
					"Happabore",
					"Bantha",
					"Hurid"],
					decryptAnswer("U2FsdGVkX1/qX9uaXz0MdO1ya8NQFV1MHfOF4lGM/sk=")),
		new Question("Die Starkiller Base war ursprünglich welcher Planet?",
					["Cato Neimoidia",
					"Hoth",
					"Zeffo",
					"Ilum"],
					decryptAnswer("U2FsdGVkX19tArPJpyIw32VL70U3U/1vEdFecxwyBs0=")),
		new Question("Auf welchem Planeten war die Widerstandsbasis?",
					["Bogano",
					"Takodana",
					"D'Qar",
					"Kashyyyk"],
					decryptAnswer("U2FsdGVkX1/cGUNLk0g3ZkYTaKK3XuwD4xVWb1CAXMQ=")),
		new Question("Welches System hat die Starkiller Base zertört?",
					["Adega-System",
					"Hosnian-System",
					"Pakunni-System",
					"Dominus-System"],
					decryptAnswer("U2FsdGVkX19CVupoLpozon6hYALSriDoSz8K5gRQIQk=")),
		new Question("Wie General Huxs Sternenzerstörer",
					["Executrix",
					"Finalizer",
					"Endurance",
					"Devestator"],
					decryptAnswer("U2FsdGVkX1/ouM5qq+hSHl/Z4o8RXlqU+O8B8ednEQc=")),
		new Question("Auf welchem Planeten lebt Maz Kanata?",
					["Takodana",
					"Utapu",
					"Naboo",
					"Lothal"],
					decryptAnswer("U2FsdGVkX1+YasHtrOkLP/epHCBUiuBs7Y+I/WH6Sfk=")),
		new Question("Welcher Widerstandspilot überlebt den Angriff auf die Starkiller Base nicht?",
					["Nien Nunb",
					"Jess Pasa",
					"Snap Wexley",
					"Ello Astay"],
					decryptAnswer("U2FsdGVkX1/sLPD0WGwc+tNV+jVas6hmy2Rb1Askc8M="))
	];

export{questions};