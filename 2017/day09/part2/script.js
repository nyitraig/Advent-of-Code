"use strict";

var sum = 0, junk = false;
var input = document.getElementsByTagName("pre")[0].innerText.trim();
input.replace(/!./g, '').split('').forEach(e => {
	if (e == '<' && !junk) {
		junk = true;
		sum--;
	}
	if (e == '>') {
		junk = false;
	}
	if (junk) {
		sum++;
	}
});

console.log("%canswer: " + sum, "font-size: x-large");
