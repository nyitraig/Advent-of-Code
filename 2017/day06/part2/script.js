"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim()
	.split('\t').map(Number);
var states = [input.toString()];

while (true) {
	let max = Math.max(...input), maxInd = input.indexOf(max);
	let inc = Math.floor(max / input.length);
	max = max % input.length;

	input[maxInd] = 0;
	input = input.map(e => e + inc);
	while (max--) {
		maxInd = maxInd == input.length - 1 ? 0 : maxInd + 1;
		input[maxInd]++;
	}

	if (states.includes(input.toString())) {
		break;
	} else {
		states.push(input.toString());
	}
}

console.log("%canswer: " + (states.length - states.indexOf(input.toString())),
	"font-size: x-large");
