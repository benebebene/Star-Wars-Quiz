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
	return CryptoJS.AES.decrypt(string, "Obi-Wan").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Was ist während der Schlacht über Coruscant zu sehen?", 
					["Ein Waschbecken", 
					"Eine Mikrowelle", 
					"Ein Föhn", 
					"Ein Backofen"],
					decryptAnswer("U2FsdGVkX1/7yU/DneVcPxEM44gU6N0cimmhgpgluOk=")),
		new Question("Wo hat George Lucas einen Cameoauftritt?", 
					["Im Jedi Tempel",
					"Im Galaktischen Opernhaus",
					"Im Senat",
					"Auf Mustafar"],
					decryptAnswer("U2FsdGVkX1/Cg69NuTi89E+GlooY+z0eJLWOM8fMlngSQ7GAZxUCMlvEgL+/PDSN")),
		new Question("Wie heißt der Varactyl den Obi-Wan Kenobi auf Utapu reitet?", 
					["Boga",
					"Tifo",
					"Zeno",
					"Agre"],
					decryptAnswer("U2FsdGVkX1/CplD97AlBTxGljUhsNQeBrlecgOUc1/A=")),
		new Question("Welchen Jedi tötet Palpatine in seinem Büro als erstes?",
					["Mace Windu",
					"Saesee Tiin",
					"Kit Fisto",
					"Agen Kolar"],
					decryptAnswer("U2FsdGVkX19prncKKPGRPzV40DqZYDH2ZcNUVhH0Z3I=")),
		new Question("Welcher Jedi wird nach Ausruf der Order 66 als erstes von Klonsoldaten getötet?",
					["Ayla Sekura",
					"Ki-Adi Mundi",
					"Plo Koon",
					"Shaak Ti"],
					decryptAnswer("U2FsdGVkX19LuHzpb2ezeOu9vgnd43+M9b5Ad33ecQM=")),
		new Question("Wie heißen die Droiden die Anakins und Obi-Wans Starfighter zu Beginn des Filmes angreifen?",
					["Buzz-Droiden",
					"Vulture-Droiden",
					"Jäger-Kampfdroiden",
					"B1-A-Luftkampfdroiden"],
					decryptAnswer("U2FsdGVkX19kLTDHYdR1lVkJWP2TmSgPUzmpSVQLJLU=")),
		new Question("Welcher Charakter erscheint nicht in Episode III?",
					["Chewbacca",
					"Leia Organa",
					"Boba Fett",
					"Tarkin"],
					decryptAnswer("U2FsdGVkX1/7d1MQGO8zt2YEhZ9pTsEXjz9nqQoddT0=")),
		new Question("Wer teilt dem Rat der Jedi mit, dass Kanzler Palpatine ein Sith ist?",
					["Mace Windu",
					"Yoda",
					"Count Dooku",
					"Anakin Skywalker"],
					decryptAnswer("U2FsdGVkX19pNktAWQnsr+m4VrFp9lXNVOjOPCfjBrEFWB+qtlYLdgh3yQtxgR2V")),
		new Question("Wo werden Luke und Leia geboren?",
					["Bail Organas Schiff",
					"Polis Massa",
					"Alderaan",
					"Tatooine"],
					decryptAnswer("U2FsdGVkX19zgpAAJj1SBSaGhpX1qy2Qb7GEmxLZk6g=")),
		new Question("Wer spricht in Episode III als letztzes?",
					["Bail Organa",
					"Obi-Wan Kenobi",
					"C-3PO",
					"Yoda"],
					decryptAnswer("U2FsdGVkX18PmZgDe/Le2MNzA9+E23SgMjzGtMhtNOc="))
	];

export{questions};