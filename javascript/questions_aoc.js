function Question(text, choices, answer)
{
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

function decryptAnswer(string)
{
	return CryptoJS.AES.decrypt(string, "Padme").toString(CryptoJS.enc.Utf8);
}	

var questions =
	[
		new Question("Wer erzählt Obi-Wan Kenobi von Kamino?", 
					["Dex", 
					"Yoda", 
					"Jocasta Nu", 
					"Count Dooku"],
					decryptAnswer("U2FsdGVkX1+JaqCH2IcFzbQ0lkH71cOYYJYGN3jWNPg=")),
		new Question("Wer gab die Bestellung für die Klon-Armee auf?", 
					["Count Dooku",
					"Jango Fett",
					"Sifo-Dyas",
					"Kanzler Palpatine"],
					decryptAnswer("U2FsdGVkX1/mAV3/ndNgPxQ9HzB3A8PAdXo2mGwIaTw=")),
		new Question("Welche Kreatur ist nicht während des Kampfes in der Arena von Geonosis zu sehen?", 
					["Reek",
					"Acklay",
					"Nexu",
					"Terentatek"],
					decryptAnswer("U2FsdGVkX1/mw1Wi6/upXFtw6bFEXZIDGR6aas5Y5TM=")),
		new Question("Wie heißt Padme Amidalas neuer Captain?",
					["Captain Panaka",
					"Captain Typho",
					"Captain Antilles",
					"Captain Syndulla"],
					decryptAnswer("U2FsdGVkX19eatmnAIGxAZtsbh2jHzuB+qMhsigIzc4=")),
		new Question("Wo wurde Jango Fett von Count Dooku rekrutiert?",
					["Monde von Bogden",
					"Tython",
					"Bogano",
					"Nal Hutta"],
					decryptAnswer("U2FsdGVkX1/J93v8epcyQ6z/3ABfZEb/ilnId6xagN/eI/sZnFMKjZ5o+UHZrEMT")),
		new Question("Welcher Jedi starb in der Schlacht von Geonosis?",
					["Adi Gallia",
					"Coleman Trebor",
					"Saesee Tiin",
					"Stass Allie"],
					decryptAnswer("U2FsdGVkX1+h5jKQWioxX9NLcL1JrijhQ/+jkUUDpXA=")),
		new Question("Was war der Arbeitstitel für Star Wars: Episode II?",
					["Clash on Geonosis",
					"And The Children Too",
					"Secrets Of Kamino",
					"Jar Jar's Big Adventure"],
					decryptAnswer("U2FsdGVkX1+ibQqDMURPDzd/g/KhALpcI8d43VOXH1CvFi/8Stei73w/kZAssoaZ")),
		new Question("An welchem See wurde die Hochzeit von Padme und Anakin gedreht?",
					["Comersee",
					"Genfersee",
					"Gardasee",
					"Étang de Berre"],
					decryptAnswer("U2FsdGVkX1/VZ+UjlWbXo4rPFrp5OO8j47f2eDZ4N/8=")),
		new Question("Wie hieß die Doppelgängerin von Padme Amidala?",
					[ "Dormé",
					"Saché",
					"Sabé",
					"Ellé"],
					decryptAnswer("U2FsdGVkX19rvUAjf8KC4hj+ogxvvxVSJO8EwIvQZQ8=")),
		new Question("Wie hieß der Mann von Shmi Skywalker?",
					[ "Lars Cliegg",
					"Gavyn Sykes",
					"Bren Derlin",
					"Cliegg Lars"],
					decryptAnswer("U2FsdGVkX1/do///A22ptPie5YL5N1UWq2q1mu43G1k="))
	];

export{questions};