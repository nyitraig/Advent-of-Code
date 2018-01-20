/* --- Part Two ---
 * There are more programs than just the ones in the group containing program ID
 * 0. The rest of them have no way of reaching that group, and still might have
 * no way of reaching each other.
 * A group is a collection of programs that can all communicate via pipes either
 * directly or indirectly. The programs you identified just a moment ago are all
 * part of the same group. Now, they would like you to determine the total
 * number of groups.
 * In the example above, there were 2 groups: one consisting of programs
 * 0,2,3,4,5,6, and the other consisting solely of program 1.
 * How many groups are there in total?
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim()
	.replace(/&gt;/g, ">").replace(/&lt;/g, "<").split('\n');
var re = /(.*) <-> (.*)/;
var connections = new Map();
var visited = [];
var n = 0;

function travel (key) {
	visited.push(key);
	connections.get(key).forEach(e => {
		if (visited.indexOf(e) == -1) {
			travel(e);
		}
	});
}

input.forEach(line => {
	var match = re.exec(line);
	connections.set(parseInt(match[1]), match[2].split(',').map(Number));
});

connections.forEach((_, key) => {
	if (visited.indexOf(key) == -1) {
		travel(key);
		n++;
	}
});

console.log(n);
