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
	return CryptoJS.AES.decrypt(string, "Snoke").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Wie heißt Rose Ticos Schwester?", 
					["Mara", 
					"Paige", 
					"Iden", 
					"Dina"],
					decryptAnswer("U2FsdGVkX1/NxgK5HQ0ShZkMso7eDqvTy9a/1cjBRl8=")),
		new Question("Was für ein Schiff fliegt Kylo Ren?", 
					["TIE Fighter",
					"TIE Bomber",
					"TIE Interceptor",
					"TIE Silencer"],
					decryptAnswer("U2FsdGVkX1+dLK2akNosqq1NdEm+fDfIhq5rvba13IE=")),
		new Question("Wie hieß Admiral Ackbars Schiff in diesem Teil?", 
					["Raddus",
					"Home One",
					"Negotiater",
					"Endurance"],
					decryptAnswer("U2FsdGVkX18N0iwv8gsPJPsI00zd/r0DP5upEEjIsa0=")),
		new Question("Wie heißt der Planet auf dem sich die Casino-Stadt befindet?",
					["Canto Bight",
					"Cantonica",
					"Canto-IV",
					"Canotopia"],
					decryptAnswer("U2FsdGVkX1/hrG78T0nT1eQmqiLzBrAl6kGa7tyvLAE=")),
		new Question("Welches BB-Droidenmodell nutzt die Erste Ordnung",
					["BB-Z1",
					"BB-XH",
					"BB-4R",
					"BB-9E"],
					decryptAnswer("U2FsdGVkX18mvQXhmMNFllRx0xXXo//DvfUXPZMxI2A=")),
		new Question("Auf welchen Planet hat sich Luke zurückgezogen?",
					["Ahch-To",
					"Tython",
					"Dantooine",
					"Zeffo"],
					decryptAnswer("U2FsdGVkX1/x2YzVr9D4F4iWifMKsNrzrAGpxEahhC8=")),
		new Question("Auf welchem Planeten war der Außenposten, auf den sich der Widerstand zurückgezogen hat?",
					["Jakku",
					"Takodana",
					"Ahch-To",
					"Crait"],
					decryptAnswer("U2FsdGVkX1/84ckoD1CpJPpaiWilKobcZWb21F4zibw=")),
		new Question("Welche Farbe hat Snokes Robe?",
					["Schwarz",
					"Rot",
					"Gold",
					"Grau"],
					decryptAnswer("U2FsdGVkX19udHeNl8BmO4RH48/2igRiOORYAVzMLak=")),
		new Question("Wie nennt man Baby Porgs?",
					["Porglet",
					"Porgling",
					"Porgle",
					"Porgie"],
					decryptAnswer("U2FsdGVkX1+ulfYMNA0fHFkNvPeSUP1zE+otzTa81zg=")),
		new Question("Welcher Charakter überlebt den Film?",
					["Snoke",
					"General Hux",
					"Admiral Ackbar",
					"Luke Skywalker"],
					decryptAnswer("U2FsdGVkX1+I3ElgYc5F9K4bcZCNml7IK3ivYnYnTbU="))
	];

export{questions};