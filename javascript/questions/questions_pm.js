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
	return CryptoJS.AES.decrypt(string, "Anakin").toString(CryptoJS.enc.Utf8);
};

var questions =
	[
		new Question("Auf den Monden welches Planeten leben Engel laut Anakin?", 
					["Ilum", 
					"Zeffo", 
					"Rodia", 
					"Iego"],
					decryptAnswer("U2FsdGVkX19qPuo0wmrbEJmx5eTmlE1Rx7nzCvsTlv0=")),
		new Question("Welcher dieser Droiden ist nicht in Episode I zu sehen?", 
					["B1-Kampfdroide",
					"Droideka",
					"B2-Superkampfdroide",
					"OOM-Kanonierdroide"],
					decryptAnswer("U2FsdGVkX1+HfkZCbdFYl5UmX6rv5vOj8lT1fuFWwD1ITe/xwp7DsrdwE7cVKchP")),
		new Question("Wie heißt der Protokoldroide der Qui-Gon Jinn und Obi-Wan Kenobi auf dem Schiff der Handelsförderation begrüßt?", 
					["TC-14",
					"C-6P2",
					"R4-D2",
					"CT-7567"],
					decryptAnswer("U2FsdGVkX19Iy7DUdcAyFrfxtpp6cNG6Rr+eh9kPCzo=")),
		new Question("Wer spricht das erste Wort im Film?",
					["Obi-Wan Kenobi",
					"Königin Amidala",
					"Captain Panaka",
					"Qui-Gon Jinn"],
					decryptAnswer("U2FsdGVkX1/eyRV1I0BqYmeHdpKtmtyXQGAoblMmgGk=")),
		new Question("Welches Wort wird im ganzen Film nicht gesagt?",
					["Macht",
					"Lichtschwert",
					"Hoffnung",
					"Auserwählte"],
					decryptAnswer("U2FsdGVkX19ZXzNU8yemXGGDnMO478JpRPdpAfT9Jd8=")),
		new Question("Welcher Spezies gehört der Schrotthändler Watto an?",
					["Neimodianer",
					"Rodianer",
					"Toydorianer",
					"Dubravaner"],
					decryptAnswer("U2FsdGVkX19JZSLBDbq2cR8mrcRSRVp34TmzEl2BGPI=")),
		new Question("Welchen Titel trägt Nute Gunray?",
					["Herzog",
					"Graf",
					"Vizekönig",
					"Fürst"],
					decryptAnswer("U2FsdGVkX19zidUXFSt0yh7NRcUzhXGnQaK0WE5FdUA=")),
		new Question("Wie alt ist Anakin in Episode I?",
					["9",
					"11",
					"7",
					"13"],
					decryptAnswer("U2FsdGVkX18j0cldYuMuynL3KUmZg6znm0i4iU6dyuc=")),
		new Question("Über welchem Planeten startet der Film?",
					["Coruscant",
					"Tatooine",
					"Naboo",
					"Alderaan"],
					decryptAnswer("U2FsdGVkX18D1KgoPBhQvaTwyNBRL6eZPcemPnDBUBU=")),
		new Question("Wer macht nicht beim Podrennen mit?",
					["Anakin Skywalker",
					"Sebulba",
					"Ben Quadinaros",
					"Elan Sel'Sabagno"],
					decryptAnswer("U2FsdGVkX1/4vUEp0SMDhiz6BfQnOoTdiHlabeiS1JtJ3QH84N+ILUhgT1r3of3A"))
	];

export{questions};