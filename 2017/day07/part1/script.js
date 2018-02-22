"use strict";

var Node = class {
	constructor (name, weight) {
		this.Name     = name;
		this.Weight   = weight;
		this.Children = [];
	}

	insertLeaf (leaf) {
		var success = false;
		this.Children.forEach((elem, i) => {
			if (elem.Weight == 0 && elem.Name == leaf.Name) {
				this.Children[i] = leaf;
				success = true;
			} else {
				success = success || this.Children[i].insertLeaf(leaf);
			}
		});
		return success;
	}
}

var regex  = /(.*) \((.*)\)(?: -> (.*))?/;
var forest = [];

document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').forEach(e => {
	var match = regex.exec(e.replace(/&gt;/g, ">"));
	var node = new Node(match[1], parseInt(match[2]));
	if (match[3]) {
		match[3].split(", ").forEach(name => {
			var i = forest.findIndex(x => x.Name == name);
			if (i == -1) {
				node.Children.push(new Node(name, 0));
			} else {
				node.Children.push(forest.splice(i, 1)[0]);
			}
		});
	}

	var success = false;
	for (var i = 0; i < forest.length && !success; i++) {
		success = forest[i].insertLeaf(node);
	}
	if (!success) {
		forest.push(node);
	}
});

console.log(forest[0].Name);
