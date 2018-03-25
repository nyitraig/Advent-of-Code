"use strict";

function compare (a, b, operator) {
	switch (operator) {
		case "==" : return a == b;
		case "!=" : return a != b;
		case  "<" : return a < b;
		case "<=" : return a <= b;
		case  ">" : return a > b;
		case ">=" : return a >= b;
	}
}

var registers = new Map();

document.getElementsByTagName("pre")[0].innerText.trim().split('\n').forEach(e => {
	let instruction = e.split(' ');
	let regA = instruction[0], regB = instruction[4];
	let regBVal = registers.has(regB) ? registers.get(regB) : 0;
	if (compare(regBVal, parseInt(instruction[6]), instruction[5])) {
		let regAVal = registers.has(regA) ? registers.get(regA) : 0;
		regAVal += (instruction[1] == "inc")
			? parseInt(instruction[2])
			: -parseInt(instruction[2]);
		registers.set(regA, regAVal);
	}
});

console.log("%canswer: " + Math.max(...[...registers].map(([k, v]) => v)),
	"font-size: x-large");
