"use strict";

var sum = 0, score = 1, junk = false;
var input = document.getElementsByTagName("pre")[0].innerText.trim();
input.replace(/!./g, '').split('').forEach(e => {
	switch (e) {
		case '{' : sum += junk ? 0 : score++; break;
		case '}' : score -= junk ? 0 : 1; break;
		case '>' : junk = false; break;
		case '<' : junk = true; break;
		default  : break;
	}
});

console.log("%canswer: " + sum, "font-size: x-large");
