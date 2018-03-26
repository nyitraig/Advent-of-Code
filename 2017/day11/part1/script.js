/* solution was based on this brilliant article by Chris Schetter
 * http://keekerdc.com/2011/03/hexagon-grids-coordinate-systems-and-distance-calculations/
 */

"use strict";

var x = 0, y = 0, z = 0;

document.getElementsByTagName("pre")[0].innerText.trim().split(',').forEach(e => {
	switch (e) {
		case "n"  : y++; z--; break;
		case "s"  : y--; z++; break;
		case "ne" : x++; z--; break;
		case "sw" : x--; z++; break;
		case "se" : x++; y--; break;
		case "nw" : x--; y++; break;
	}
});

console.log("%canswer: " + Math.max(Math.abs(x), Math.abs(y), Math.abs(z)),
	"font-size: x-large");
