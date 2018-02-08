"use strict";

var input = document.getElementsByTagName("pre")[0]
	.innerHTML.trim().split('\n').map(Number);
var n = 0, i = 0;

while (i >= 0 && i < input.length) {
	i += input[i]++;
	n++;
}

console.log(n);
