"use strict";

function travel (id) {
	visited.push(id);
	connections.get(id).forEach(e => {
		if (visited.indexOf(e) == -1) {
			travel(e);
		}
	});
}

var connections = new Map(), visited = [], n = 0;

document.getElementsByTagName("pre")[0].innerText.trim().split('\n').forEach(e => {
	let [id, neighbours] = e.split(" <-> ");
	connections.set(Number(id), neighbours.split(',').map(Number));
});

connections.forEach((_, key) => {
	if (visited.indexOf(key) == -1) {
		travel(key);
		n++;
	}
});

console.log("%canswer: " + n, "font-size: x-large");
