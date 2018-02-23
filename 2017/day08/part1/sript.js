"use strict";

function compare (a, b, operator) {
	switch (operator) {
		case "==":    return a == b;
		case "!=":    return a != b;
		case "&lt;":  return a < b;
		case "&lt;=": return a <= b;
		case "&gt;":  return a > b;
		case "&gt;=": return a >= b;
		default:      return false;
	}
}

var registers = new Map();

document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').forEach(e => {
	var instruction = e.split(' ');
	var regA = instruction[0], regB = instruction[4];
	if (!registers.has(regA)) {
		registers.set(regA, 0);
	}
	if (!registers.has(regB)) {
		registers.set(regB, 0);
	}
	if (compare(registers.get(regB), parseInt(instruction[6]), instruction[5])) {
		if (instruction[1] == "inc") {
			registers.set(regA, registers.get(regA) + parseInt(instruction[2]));
		}
		if (instruction[1] == "dec") {
			registers.set(regA, registers.get(regA) - parseInt(instruction[2]));
		}
	}
});

console.log(Math.max(...[...registers].map(([k, v]) => v)));
