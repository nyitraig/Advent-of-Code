/* --- Part Two ---
 * Now, the jumps are even stranger: after each jump, if the offset was three
 * or more, instead decrease it by 1. Otherwise, increase it by 1 as before.
 * Using this rule with the above example, the process now takes 10 steps,
 * and the offset values after finding the exit are left as 2 3 2 3 -1.
 * How many steps does it now take to reach the exit?
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').map(Number);
var index = 0;
var n = 0;

while (index >= 0 && index < input.length) {
	var temp = input[index];
	input[index] = temp >= 3 ? temp - 1 : temp + 1;
	index += temp;
	n++;
}

console.log(n);
