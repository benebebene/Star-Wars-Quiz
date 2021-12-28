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
	return CryptoJS.AES.decrypt(string, "Luke").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Was war Han Solos Rufnummer auf Hoth?", 
					["Echo 4", 
					"Echo 5", 
					"Echo 6",
					"Echo 7"],
					decryptAnswer("U2FsdGVkX196h08AQgfuUSh2fVDkNkZV5ffBqPMeznk=")),
		new Question("Was wollte Luke untersuchen als er von einem Wampa angegriffen wurde?", 
					["Imperialer Suchdroide",
					"Höhle",
					"Meteorit",
					"Imperialer Sender"],
					decryptAnswer("U2FsdGVkX1+PHp6n+VRhEuaEpGKqzvjJoncfvJUEAvQ=")),
		new Question("Wie stehen die Chance unbeschadet durch das Asteroidenfeld zu fliegen?", 
					["1 zu 3.720",
					"1 zu 4.920",
					"1 zu 2.890",
					"1 zu 5.460"],
					decryptAnswer("U2FsdGVkX19HVbBopcqzK1g1gk5n3egkXVt0Y6TLFWk=")),
		new Question("Wer wird neuer Captain des Schiffs von Darth Vader",
					["Admiral Griff",
					"Admiral Vanto",
					"Admiral Piett",
					"Admiral Kallis"],
					decryptAnswer("U2FsdGVkX18rwlvoiChprs6HAWB0JS00DBIdqCjac+4=")),
		new Question("Welcher Kopfgeldjäger wurde nicht damit beauftragt den Milleniumfalken zu finden?",
					["Bossk",
					"Zam Wesell",
					"Dengar",
					"IG-88"],
					decryptAnswer("U2FsdGVkX1/+/VZQjd0nB1MJoo6ONIs+ug2bgHAXBfE=")),
		new Question("Wer führte den imperialen Bodenangriff auf Hoth an?",
					["General Veers",
					"Colonel Starck",
					"Admiral Ozzel",
					"Admiral Piett"],
					decryptAnswer("U2FsdGVkX1+d5WxabbpJsc2N1dwwAm8esLgzoSPJiR0=")),
		new Question("Wie heißt Darth Vaders Super Sternenzerstörer?",
					["Finalizer",
					"Executrix",
					"Executor",
					"Chimera"],
					decryptAnswer("U2FsdGVkX19hr1a8UWTu4r5jcSAWbxYIzpi5H+KelcQ=")),
		new Question("Auf welcher Landeplatform auf Bespin landet der Milleniumfalken",
					["282",
					"327",
					"B-82",
					"D-24"],
					decryptAnswer("U2FsdGVkX1+Cb+Qme50xRRi18H8Nb2XU0nP11tyWlMo=")),
		new Question("Welcher Spezies gehören die Mechaniker an, die C-3PO auuf Bespin zerlegen?",
					["Twi'lek",
					"Mensch",
					"Jawa",
					"Ugnaught"],
					decryptAnswer("U2FsdGVkX18/Gdw0TqPULYQLIxytaX9D9OTzAAAqhcY=")),
		new Question("Welches Körperteil verliert Luke im Kampf gegen Darth Vade?",
					["Linke Hand",
					"Rechte Hand",
					"Linkes Beim",
					"Rechtes Ohr"],
					decryptAnswer("U2FsdGVkX19tukper5ShTjaQbS3njyBZoeUgsGXdrTM="))
	];

export{questions};