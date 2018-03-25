"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim().split('\n');
var checksum = input.reduce((accumulator, currentValue) => {
	let row = currentValue.split('\t').map(Number);
	let max = row[0], min = row[0];
	for (let i = 1; i < row.length; i++) {
		max = row[i] > max ? row[i] : max;
		min = row[i] < min ? row[i] : min;
	}
	return accumulator + max - min;
}, 0);

console.log("%canswer: " + checksum, "font-size: x-large");
