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
	return CryptoJS.AES.decrypt(string, "L3-37").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Auf welchem Planeten wuchs Han Solo auf?", 
					["Mimban", 
					"Kessel", 
					"Savareen", 
					"Corellia"],
					decryptAnswer("U2FsdGVkX19CnNGByfMA1yraXSX4nuGrCj9LUGuCOEA=")),
		new Question("Wie heißt der Treibstoff welcher unteranderem von Han gestohlen wird?", 
					["Rhydonium",
					"Coaxium",
					"Agrozit",
					"Zylium-12"],
					decryptAnswer("U2FsdGVkX18nlpaXVqrNGEGWtgKH9Hymy5K1NeWGY7o=")),
		new Question("Wie heißt Tobias Becketts Frau?", 
					["Val",
					"Liv",
					"Ivy",
					"Ava"],
					decryptAnswer("U2FsdGVkX19y2JF7QmoSjtq4yV/L+SUzwroDjS+TGww=")),
		new Question("Welchen Glücksbringer schenkt Han Qi'ra?",
					["Silberne Münze",
					"Goldene Würfel",
					"Pinke Perle",
					"Alter Blaster"],
					decryptAnswer("U2FsdGVkX1+lehMz/CP8qhSnmReuZEZ1N7gBKunC9L8=")),
		new Question("Wie heißt das Syndikat für das Qi'ra arbeitet??",
					["Black Sun",
					"Death Watch",
					"Crimson Dawn",
					"Pikes"],
					decryptAnswer("U2FsdGVkX1+GENMr3rCLok+MDMuaO6I/peTJ/FTMwj4=")),
		new Question("Wie heißt der Boss von Qi'ra?",
					["Quinlan Vos",
					"Enfys Nest",
					"Dryden Vos",
					"Pre Vizla"],
					decryptAnswer("U2FsdGVkX1+D/HVkqbLJi5HGtRxv32lrl36BFYep5kc=")),
		new Question("Wie alt ist Chewbacca in diesem Film?",
					["80 Jahre",
					"110 Jahre",
					"145 Jahre",
					"190 Jahre"],
					decryptAnswer("U2FsdGVkX1/e/StZedvTXYQ8SxdH2vQAmXGF9ypJH3Y=")),
		new Question("Wer wird auf Kessel angeschossen?",
					["Lando Calrissian",
					"Qi'ra",
					"Han Solo",
					"Chewbacca"],
					decryptAnswer("U2FsdGVkX18eb+/oEp2nCW96QvYjnrgiqlRSzj+eQnFv5HJGRuoBBcbyu8zbzZZC")),
		new Question("Wie heißt die Anführerin der Rebellengruppe am Ende des Films?",
					["Mon Mothma",
					"Enfys Nest",
					"Zam Wessel",
					"Kreia"],
					decryptAnswer("U2FsdGVkX1+1xOm8WKyMjfYiDuQZ0qMkhxRRJNGB4W0=")),
		new Question("Wer tötet Dryden Vos?",
					["Han Solo",
					"Tobias Beckett",
					"Darth Maul",
					"Qi'ra"],
					decryptAnswer("U2FsdGVkX19u55n655x4D6oqn/w7QDXtLNJMVMjQMx0="))
	];

export{questions};