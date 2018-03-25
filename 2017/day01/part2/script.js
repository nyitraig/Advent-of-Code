"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim()
	.split('').map(Number);
var sum = 0;

for (let i = 0; i < input.length / 2; i++) {
	if (input[i] == input[i + input.length / 2]) {
		sum += input[i];
	}
}

console.log("%canswer: " + sum * 2, "font-size: x-large");
