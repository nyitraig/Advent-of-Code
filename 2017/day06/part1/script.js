"use strict";

var input = document.getElementsByTagName("pre")[0]
	.innerHTML.trim().split('\t').map(Number);
var states = [input.toString()];

while (true) {
	var max = Math.max(...input), maxInd = input.indexOf(max);
	var inc = Math.floor(max / input.length);
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

console.log(states.length);
