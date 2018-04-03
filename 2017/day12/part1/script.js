"use strict";

function travel (id) {
	visited.push(id);
	connections.get(id).forEach(e => {
		if (visited.indexOf(e) == -1) {
			travel(e);
		}
	});
}

var connections = new Map(), visited = [];

document.getElementsByTagName("pre")[0].innerText.trim().split('\n').forEach(e => {
	let [id, neighbours] = e.split(" <-> ");
	connections.set(Number(id), neighbours.split(',').map(Number));
});

travel(0);
console.log("%canswer: " + visited.length, "font-size: x-large");
