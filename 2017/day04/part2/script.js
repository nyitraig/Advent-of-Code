"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim().split('\n');
var result = input.reduce((accumulator, currentLine) => {
	let arr = currentLine.split(' ').map(x => x.split('').sort().join(''));
	let set = new Set(arr);
	return accumulator += (set.size == arr.length) ? 1 : 0;
}, 0);

console.log("%canswer: " + result, "font-size: x-large");
