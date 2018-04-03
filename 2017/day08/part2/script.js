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
var max = 0;

document.getElementsByTagName("pre")[0].innerText.trim().split('\n').forEach(e => {
	let [regA, instr, amount, _, regB, op, value] = e.split(' ');
	let regBVal = registers.has(regB) ? registers.get(regB) : 0;
	if (compare(regBVal, Number(value), op)) {
		let regAVal = registers.has(regA) ? registers.get(regA) : 0;
		regAVal += (instr == "inc")
			? Number(amount)
			: -Number(amount);
		registers.set(regA, regAVal);
		max = regAVal > max ? regAVal : max;
	}
});

console.log("%canswer: " + max, "font-size: x-large");
