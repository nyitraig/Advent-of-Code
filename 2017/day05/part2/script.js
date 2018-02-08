"use strict";

var input = document.getElementsByTagName("pre")[0]
	.innerHTML.trim().split('\n').map(Number);
var n = 0, i = 0;

while (i >= 0 && i < input.length) {
	var temp = input[i];
	input[i] = temp >= 3 ? temp - 1 : temp + 1;
	i += temp;
	n++;
}

console.log(n);
