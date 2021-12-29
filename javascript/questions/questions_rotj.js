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
	return CryptoJS.AES.decrypt(string, "Sarlacc").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Han Solo ist laut Jabba dessen Lieblings-...", 
					["Dekoration",
					"Schmuggler",
					"Gemälde",
					"Gefangener"],
					decryptAnswer("U2FsdGVkX19I6N/Hg93pmEWVMgFdmG2tkvjOld5S/Rw=")),
		new Question("Welche Spezies ist nicht in Jabbas Palast zu sehen?", 
					["Quarren",
					"Twi'lek",
					"Ithorianer",
					"Rodianer"],
					decryptAnswer("U2FsdGVkX18VQbDFW2qDs2DYUZPP/wlN60vnNoidy90=")),
		new Question("Wie heißt Jabbas Haustier",
					["Jubnuk",
					"Ree-Yees",
					"Ekelarc Yong",
					"Salacious B. Crumb"],
					decryptAnswer("U2FsdGVkX19y+A8W+DfiTmg5ho1VQeh6vu+1nln3cdozovdIqoMkd7j/U/gozGFA")),
		new Question("Was hat Luke geworfen um die Tür zu schließen um den Rancor zu töten?",
					["Stein",
					"Lichtschwert",
					"Thermaldetonator",
					"Schädel"],
					decryptAnswer("U2FsdGVkX19FX5yWLSNoLlUdRBcpOkSZbfOUHX6gAnM=")),
		new Question("Wer hat Jabba den Rancor geschenkt?",
					["Großmoff Tarkin",
					"Bib Fortuna",
					"Boba Fett",
					"Han Solo"],
					decryptAnswer("U2FsdGVkX18lBEbEAZ3k+73GR1lKQiBmQ7X2qeI8nFA=")),
		new Question("Bevor Yoda stirbt sagt er Luke, es gibt noch einen...",
					["Skywalker",
					"Jedi",
					"Sith",
					"Kenobi"],
					decryptAnswer("U2FsdGVkX184bbdxArb6++lH3/oZzvZNy+dOZQkk3uE=")),
		new Question("Wie lautet Jabba the Hutts vollständiger Name?", 
					["Jabba'ir Doma'ar", 
					"Jabba Desilijic Tiure", 
					"Jabbatar Rrutome", 
					"Jabba Mithonda Lomar"],
					decryptAnswer("U2FsdGVkX1+sMj3RqkFktC3sr+DiwEZeUlahK7Oit02Va5evfx+XL6E92vproehZ")),
		new Question("Wer ist kein Ewok?",
					["Teebo",
					"Paploo",
					"Logray",
					"Dathcha"],
					decryptAnswer("U2FsdGVkX18RJTATUJHaEjs1gtY91hyfd7SI1igUJjE=")),
		new Question("Wie heißt der Anführer des Ewokstamms, der den Rebellen bei der Schlacht von Yavin hilft?",
					["Chief Chirpa",
					"Chief Nebit",
					"Chief Wicket",
					"Chief Memba"],
					decryptAnswer("U2FsdGVkX1/tBXrmtLCpHKaXF2yPoGVrQ/eeFN8pjjA=")),
		new Question("Wer flog während der Schlacht von Endor mit Lando Calrissian im Milleniumfalken?",
					["Nien Nunb",
					"Mosep Binneed",
					"Wam Lufba",
					"Buboicullaar"],
					decryptAnswer("U2FsdGVkX183jofndGjDbydtAv/dmzVFe6DNgqRdsg4="))
	];

export{questions};