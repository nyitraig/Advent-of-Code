"use strict";

var input = document.getElementsByTagName("pre")[0].innerText.trim().split('\n');
var checksum = input.reduce((accumulator, currentValue) => {
	let row = currentValue.split('\t').map(Number);
	for (let i = 0; i < row.length; i++) {
		for (let j = i + 1; j < row.length; j++) {
			if (row[i] % row[j] == 0) {
				return accumulator + row[i] / row[j];
			}
			if (row[j] % row[i] == 0) {
				return accumulator + row[j] / row[i];
			}
		}
	}
}, 0);

console.log("%canswer: " + checksum, "font-size: x-large");
