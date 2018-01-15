/* --- Day 8: I Heard You Like Registers ---
 * You receive a signal directly from the CPU. Because of your recent assistance
 * with jump instructions, it would like you to compute the result of a series
 * of unusual register instructions.
 * Each instruction consists of several parts: the register to modify, whether
 * to increase or decrease that register's value, the amount by which to
 * increase or decrease it, and a condition. If the condition fails, skip the
 * instruction without modifying the register. The registers all start at 0.
 * The instructions look like this:
 * b inc 5 if a > 1
 * a inc 1 if b < 5
 * c dec -10 if a >= 1
 * c inc -20 if c == 10
 * These instructions would be processed as follows:
 * - Because a starts at 0, it is not greater than 1, and so b is not modified.
 * - a is increased by 1 (to 1) because b is less than 5 (it is 0).
 * - c is decreased by -10 (to 10) because a is now greater than or equal to 1
 *   (it is 1).
 * - c is increased by -20 (to -10) because c is equal to 10.
 * After this process, the largest value in any register is 1.
 * You might also encounter <= (less than or equal to) or != (not equal to).
 * However, the CPU doesn't have the bandwidth to tell you what all the
 * registers are named, and leaves that to you to determine.
 * What is the largest value in any register after completing the instructions
 * in your puzzle input?
 */

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

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n');
var registers = new Map();
input.forEach(line => {
	var instruction = line.split(' ');
	var regA = instruction[0];
	var regB = instruction[4];
	if (!registers.has(regA)) {
		registers.set(regA, 0);
	}
	if (!registers.has(regB)) {
		registers.set(regB, 0);
	}
	if (compare(registers.get(regB), parseInt(instruction[6]), instruction[5])) {
		switch (instruction[1]) {
			case "inc":
				registers.set(regA, registers.get(regA) + parseInt(instruction[2]));
				break;
			case "dec":
				registers.set(regA, registers.get(regA) - parseInt(instruction[2]));
				break;
		}
	}
});

var max = registers.values().next().value;
registers.forEach(value => max = value > max ? value : max);
console.log(max);
