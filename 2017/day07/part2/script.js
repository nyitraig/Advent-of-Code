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

	totalWeight () {
		var totalWeight = 0;
		if (this.Children.length != 0) {
			this.Children.forEach((child, i) => {
				var childTotalWeight = child.totalWeight();
				if (totalWeight / childTotalWeight != i) {
					var distance = totalWeight / i - childTotalWeight;
					console.log(child.Weight + distance); // tactically placed log
					totalWeight += distance;
				}
				totalWeight += childTotalWeight;
			});
		}
		return totalWeight + this.Weight;
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

var _ = forest[0].totalWeight();
