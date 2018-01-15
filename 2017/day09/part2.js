/* --- Part Two ---
 * Now, you're ready to remove the garbage.
 * To prove you've removed it, you need to count all of the characters within
 * the garbage. The leading and trailing < and > don't count, nor do any
 * canceled characters or the ! doing the canceling.
 * - <>, 0 characters.
 * - <random characters>, 17 characters.
 * - <<<<>, 3 characters.
 * - <{!>}>, 2 characters.
 * - <!!>, 0 characters.
 * - <!!!>>, 0 characters.
 * - <{o"i!a,<{i<a>, 10 characters.
 * How many non-canceled characters are within the garbage in your puzzle input?
 */
"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim();
input = input.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/!./g, '');

var sum = 0;
var junk = false;

for (var i = 0; i < input.length; i++) {
	if (input[i] == '<' && !junk) {
		junk = true;
		sum--;
	}
	if (input[i] == '>') {
		junk = false;
	}
	if (junk) {
		sum++;
	}
}

console.log(sum);
