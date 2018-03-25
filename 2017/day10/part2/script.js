"use strict";

var pos = 0, skip = 0, dense = [];
var list = [...Array(256).keys()]; // [0, 1, 2, ... , 255]
var input = document.getElementsByTagName("pre")[0].innerText.trim()
	.split('').map(x => x.charCodeAt(0)).concat([17, 31, 73, 47, 23]);

for (let i = 0; i < 64; i++) {
	input.forEach(length => {
		for (let j = 0; j < length / 2; j++) {
			let x = (pos + j) % list.length, y = (pos + length - 1 - j) % list.length;
			list[x] = list.splice(y, 1, list[x])[0];
		}
		pos = (pos + length - 1 + ++skip) % list.length;
	});
}

for (let i = 0; i < 16; i++) {
	dense.push(list.slice(i * 16, i * 16 + 16).reduce((a, b) => a ^ b));
}

dense = dense.map(e => e < 16 ? '0' + e.toString(16) : e.toString(16));
console.log("%canswer: " + dense.join(''), "font-size: x-large");
