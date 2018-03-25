"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim()
	.split('').map(Number);
var sum = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i] == input[(i + 1) % input.length]) {
		sum += input[i];
	}
}

console.log("%canswer: " + sum, "font-size: x-large");
