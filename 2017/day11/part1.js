/* --- Day 11: Hex Ed ---
 * Crossing the bridge, you've barely reached the other side of the stream when
 * a program comes up to you, clearly in distress. "It's my child process," she
 * says, "he's gotten lost in an infinite grid!"
 * Fortunately for her, you have plenty of experience with infinite grids.
 * Unfortunately for you, it's a hex grid.
 * The hexagons ("hexes") in this grid are aligned such that adjacent hexes can
 * be found to the north, northeast, southeast, south, southwest, and northwest:
 *   \ n  /
 * nw +--+ ne
 *   /    \
 * -+      +-
 *   \    /
 * sw +--+ se
 *   / s  \
 * You have the path the child process took. Starting where he started, you need
 * to determine the fewest number of steps required to reach him. (A "step"
 * means to move from the hex you are in to any adjacent hex.)
 * For example:
 * - ne,ne,ne is 3 steps away.
 * - ne,ne,sw,sw is 0 steps away (back where you started).
 * - ne,ne,s,s is 2 steps away (se,se).
 * - se,sw,se,sw,sw is 3 steps away (s,s,sw).
 *
 * solution was based on this brilliant article by Chris Schetter
 * http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split(',');
var x = 0, y = 0, z = 0;

input.forEach(e => {
	switch (e) {
		case "n":  y++; z--; break;
		case "s":  y--; z++; break;
		case "ne": x++; z--; break;
		case "sw": x--; z++; break;
		case "se": x++; y--; break;
		case "nw": x--; y++; break;
	}
});

console.log(Math.max(Math.abs(x), Math.abs(y), Math.abs(z)));
