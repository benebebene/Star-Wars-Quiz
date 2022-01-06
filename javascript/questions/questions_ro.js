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
	return CryptoJS.AES.decrypt(string, "Todesstern").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Wie heißt Jyn Ersos Vater?", 
					["Marek Erso", 
					"Galen Erso", 
					"Warren Erso", 
					"Taran Erso"],
					decryptAnswer("U2FsdGVkX1+Olje8s1ZcKo6p7kSU5FkWBQIG/q9lvxA=")),
		new Question("Welche imperialen Truppler wurden in diesem Film neu eingeführt?", 
					["Todestruppler",
					"Küstentruppler",
					"Scouttruppler",
					"Schocktruppler"],
					decryptAnswer("U2FsdGVkX1+6/janydkRRNmFIOqjGx5++mGWJfeFr40=")),
		new Question("Auf welchem Planeten befand sich die Farm der Familie Erso?", 
					["Vallt",
					"Bogden",
					"Dantooine",
					"Lah'mu"],
					decryptAnswer("U2FsdGVkX1+6T6FAAXC0KMcL7sYAl+i8ewl+BshR2WY=")),
		new Question("Wer schoß auf Direktor Krennic zu beginn des Films?",
					["Jyn Erso",
					"Cassian Andor",
					"Lyra Erso",
					"Galen Erso"],
					decryptAnswer("U2FsdGVkX19vsjqmyUjIXUnLmB0m1sH0MT64brmbdJY=")),
		new Question("Welcher Charakter ist ein Pilot?",
					["Baze Malbus",
					"Chirrut Îmwe",
					"Jyn Erso",
					"Bodhi Rook"],
					decryptAnswer("U2FsdGVkX193hIM8bvrpnggCbm7OPgd3b2HEs7Vdp44=")),
		new Question("Auf welchem Planeten befinden sich die Pläne des Todessterns?",
					["Kashyyyk",
					"Scarif",
					"Eriadu",
					"Mortis"],
					decryptAnswer("U2FsdGVkX19JuGjffkN8P50QOvUU7hSp9bLm2GFk6N0=")),
		new Question("Welches Mitglied der Red-Staffel stirbt bei der Schlacht von Scarif? ",
					["Red 1",
					"Red 3",
					"Red 5",
					"Red 7"],
					decryptAnswer("U2FsdGVkX185ljLOnAtmVTF4TdwjuJwS7sxKkgW2Q6M=")),
		new Question("Welchen Name trugen die Pläne des Todessterns??",
					["Sternenstaub",
					"Sternschnuppe",
					"Zwillingssonnen",
					"Kleiner Mond"],
					decryptAnswer("U2FsdGVkX1/xWTOfMc/6wnTKCCyPlBhSCbUB8x2q7kM=")),
		new Question("Welcher Charakter stirbt zuerst?",
					["Bodhi Rook",
					"K-2SO",
					"Baze Malbus",
					"Jyn Erso"],
					decryptAnswer("U2FsdGVkX19v7eHHw/wGGVEdPNOaPg8ZUEaNcb/1yhE=")),
		new Question("Auf welchem Planeten befand sich die Rebellen-Basis?",
					["Jedha",
					"Eadu",
					"Typhon",
					"Yavin-IV"],
					decryptAnswer("U2FsdGVkX1/tTZBacPu7z50FVhEKVDGUC+3iQu3TYow="))
	];

export{questions};