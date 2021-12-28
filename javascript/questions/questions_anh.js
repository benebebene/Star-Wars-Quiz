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
	return CryptoJS.AES.decrypt(string, "Ben").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Wie heißt der imperiale Sternenzerstörer, den man am Anfang des Films sieht?", 
					["Devestator", 
					"Executrix", 
					"Executor", 
					"Finalizer"],
					decryptAnswer("U2FsdGVkX1/6LNvmskJVwEwV0gZ3KqFB9idVpNNlwfo=")),
		new Question("Leia sagt zu Tarkin die Rebellenbasis ist auf dem Planeten...", 
					["Yavin",
					"Hoth",
					"Alderaan",
					"Dantooine"],
					decryptAnswer("U2FsdGVkX1+e3sGa7XdTXYDJOCZnK+PUXNL0y8hSKf8=")),
		new Question("In welcher Zelle ist Leia auf dem Todesstern gefangen?", 
					["2187",
					"5415",
					"7822",
					"1916"],
					decryptAnswer("U2FsdGVkX1++R1goDYeacfp5UP/JgY/EiCiPRkCKvq8=")),
		new Question("Über was haben die Sturmtruppler beim Traktorstrahl-Terminal geredet?",
					["Ihre Uniformen",
					"Den neuen VT-16",
					"Den Milleniumfalken",
					"Fehlende Geländer"],
					decryptAnswer("U2FsdGVkX1+ze0eynSAxVZZHwrteFrbz5Ax7Ic1ECTA=")),
		new Question("Welcher Spezies gehört Greedo an?",
					["Ithorianer",
					"Rakata",
					"Rodianer",
					"Umbaraner"],
					decryptAnswer("U2FsdGVkX18Ais1OZ2WhuTIvnbj1pWt02MLvdmnA0hM=")),
		new Question("Wem schlug Obi-Wan Kenobi in der Cantina den Arm ab?",
					["Ponda Baba",
					"Col Takbright",
					"Figrin D'an",
					"Feyn Gospic"],
					decryptAnswer("U2FsdGVkX18wo0OeGpi5cYhiU97uT2m5JiLGWr1cMrI=")),
		new Question("Welchen Character hat George Lucas als erstes entworfen?",
					["Luke Skywalker",
					"Prinzessin Leia",
					"Darth Vader",
					"Obi-Wan Kenobi"],
					decryptAnswer("U2FsdGVkX19PFvNmFzhXmQfNqH4uYpB0BJY1scAql70=")),
		new Question("Welcher Pilot wurde nicht von Darth Vader angegriffen?",
					["Biggs Darklighter",
					"Garven Dreis",
					"Wedge Antilles",
					"Luke Skywalker"],
					decryptAnswer("U2FsdGVkX1/PHLAkiLVxlwu6OQuYPPE4WF1jivnDjTY=")),
		new Question("Für was steht das TIE in TIE Fighter?",
					["Third Interception Engine",
					"Ten Ions Executor",
					"Turbo Imperial Executor",
					"Twin Ion Engines"],
					decryptAnswer("U2FsdGVkX1/wx8pOOTYuR223R/jd0NbqRauYuwtWVqRYYswD0f1u1R2KbGITRG6/")),
		new Question("Wie heißt das Lied das kommt, als Luke am Ende die zwei Sonnen anschaut?",
					["Sunset On Tatooine",
					"We Go Together",
					"Galactic Dreamer",
					"Binary Sunset"],
					decryptAnswer("U2FsdGVkX19jEeDsZuKEzeWqpyCO8NrE/u6MitlBs+c="))
	];

export{questions};