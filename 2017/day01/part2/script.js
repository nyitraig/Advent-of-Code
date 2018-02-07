"use strict";

var sum = 0;
var input = document.getElementsByTagName("pre")[0].innerHTML.trim()
	.split('').map(Number);

for (var i = 0; i < input.length / 2; i++) {
	if (input[i] == input[i + input.length / 2]) {
		sum += input[i];
	}
}

console.log(sum * 2);
