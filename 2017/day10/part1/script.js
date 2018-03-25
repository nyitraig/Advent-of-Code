"use strict";

var pos = 0, skip = 0;
var list = [...Array(256).keys()]; // [0, 1, 2, ... , 255]
var input = document.getElementsByTagName("pre")[0].innerText.trim();
input.split(',').map(Number).forEach(length => {
	for (let i = 0; i < length / 2; i++) {
		let x = (pos + i) % list.length, y = (pos + length - 1 - i) % list.length;
		list[x] = list.splice(y, 1, list[x])[0];
	}
	pos = (pos + length - 1 + ++skip) % list.length;
});

console.log("%canswer: " + list[0] * list[1], "font-size: x-large");
