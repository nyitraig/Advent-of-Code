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
	let [regA, instr, amount, _, regB, op, value] = e.split(' ');
	let regBVal = registers.has(regB) ? registers.get(regB) : 0;
	if (compare(regBVal, Number(value), op)) {
		let regAVal = registers.has(regA) ? registers.get(regA) : 0;
		regAVal += (instr == "inc")
			? Number(amount)
			: -Number(amount);
		registers.set(regA, regAVal);
	}
});

console.log("%canswer: " + Math.max(...[...registers].map(([k, v]) => v)),
	"font-size: x-large");
