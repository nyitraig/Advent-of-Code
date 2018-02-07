"use strict";

var sum = 0;
var input = document.getElementsByTagName("pre")[0].innerHTML.trim()
	.split('').map(Number);

for (var i = 0; i < input.length; i++) {
	if (input[i] == input[(i + 1) % input.length]) {
		sum += input[i];
	}
}

console.log(sum);
