/* --- Part Two ---
 * Out of curiosity, the debugger would also like to know the size of the loop:
 * starting from a state that has already been seen, how many block
 * redistribution cycles must be performed before that same state is seen again?
 * In the example above, 2 4 1 2 is seen again after four cycles,
 * and so the answer in that example would be 4.
 * How many cycles are in the infinite loop that arises from the configuration
 * in your puzzle input?
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split('\t').map(Number);
var states = [input.toString()];
var num = 0;
var found = false;

while (true) {
	var max = input[0];
	var maxIndex = 0;
	for (var i = 1; i < input.length; i++) {
		if (input[i] > max) {
			max = input[i];
			maxIndex = i;
		}
	}

	input[maxIndex] = 0;
	while (max > 0) {
		maxIndex = (maxIndex == input.length - 1) ? 0 : maxIndex + 1;
		input[maxIndex]++;
		max--;
	}
	num++;

	if (states.includes(input.toString())) {
		if (found) {
			break;
		} else {
			found = true;
			var states = [input.toString()];
			var num = 0;
		}
	} else {
		states.push(input.toString());
	}
}

console.log(num);
