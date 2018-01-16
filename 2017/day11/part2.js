/* --- Part Two ---
 * How many steps away is the furthest he ever got from his starting position?
 *
 * solution was based on this brilliant article by Chris Schetter
 * http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split(',');
var x = 0, y = 0, z = 0, max = 0;

input.forEach(e => {
	switch (e) {
		case "n":  y++; z--; break;
		case "s":  y--; z++; break;
		case "ne": x++; z--; break;
		case "sw": x--; z++; break;
		case "se": x++; y--; break;
		case "nw": x--; y++; break;
		default: break;
	}
	var dist = Math.max(Math.abs(x), Math.abs(y), Math.abs(z));
	max = dist > max ? dist : max;
});

console.log(max);
