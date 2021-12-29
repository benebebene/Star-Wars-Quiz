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
	return CryptoJS.AES.decrypt(string, "Palpatine").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Wie heißt der Droide, der von BB-8 aufgeweckt wurde?", 
					["Z-1", 
					"D-9", 
					"B-X", 
					"D-O"],
					decryptAnswer("U2FsdGVkX18dvm0QsoZTceMplsnV6I1wHE6TQsTPR+0=")),
		new Question("Auf welchem Planeten traf Rey Lando Calrissian?", 
					["Dantooine",
					"Pasaana",
					"Takodana",
					"Jakku"],
					decryptAnswer("U2FsdGVkX1+Gefdz7kjAak09Mc4zH6FCFkSaODAKuUo=")),
		new Question("Wer hat C-3PO umprogrammiert, so dass dieser die Sith-Sprache übersetzen konnte?", 
					["Babu Frik",
					"Zorii Bliss",
					"Castin Donn",
					""],
					decryptAnswer("U2FsdGVkX191h9ydZvhmz4Dy5WbfhjrjhrbBFk62TK8=")),
		new Question("Auf welchem Planeten befindet sich Palpatine?",
					["Malachor-V",
					"Exegol",
					"Mustafar",
					"Korriban"],
					decryptAnswer("U2FsdGVkX1+c/UcyPl77kDIdmNgfsHm/4AMCi84tYSM=")),
		new Question("Wer gab Poe die Captain-Plakette?",
					["Babu Frik",
					"Finn",
					"Lando Calrissian",
					"Zorii Bliss"],
					decryptAnswer("U2FsdGVkX18BJ5H/bvV+ad+ISOq7m5RaR3mO8+XvMsU=")),
		new Question("Wessen Lichtschwert gibt Lukes Machtgeist Rey?",
					["Leias",
					"Yodas",
					"Obi-Wans",
					"Ahsokas"],
					decryptAnswer("U2FsdGVkX18b9gLEVMG8WzEf/GfBrpdbj4NsgwfJsD0=")),
		new Question("Wie hieß der Sith-Assasine, dessen dolch Rey gefunden hat?",
					["Domu",
					"Mera",
					"Sicco",
					"Ochi"],
					decryptAnswer("U2FsdGVkX1+4+KCeEvhAbWR47vgASZWWDHN9OfGJrXI=")),
		new Question("Welchen Titel trug Sheev Palpatine in diesem Film?",
					["Ewiger Imperator",
					"Großimperator",
					"Imperator der Sith-Ewigen",
					"Sith-Imperator"],
					decryptAnswer("U2FsdGVkX19jXcsU/T2pSR6R/HZBbiu9ryL3aLC/o+u8R/bLDcFm7yZ2BuYNkkGm")),
		new Question("Welcher Jedi sprach nicht zu Rey im Kampf gegen den Palpatine",
					["Anakin Skywalker",
					"Plo Koon",
					"Ashoka Tano",
					"Kanan Jarrus"],
					decryptAnswer("U2FsdGVkX1+KSZ2CI0Vv/YqLbyUB7Dnu6R8NFHAlx3A=")),
		new Question("Auf welchem Planeten hat Rey die zwei Lichtschwerter vergraben?",
					["Jakku",
					"Lothal",
					"Ryloth",
					"Tatooine"],
					decryptAnswer("U2FsdGVkX18zcL5qK6Dr/nIhGeaXIHnD7Z0fxWWVeAA="))
	];

export{questions};