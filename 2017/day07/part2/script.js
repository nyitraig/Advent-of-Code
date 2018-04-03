"use strict";

var Node = class {
	constructor (name, weight) {
		this.Name     = name;
		this.Weight   = weight;
		this.Children = [];
	}

	insertLeaf (leaf) {
		let success = false;
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
		let totalWeight = 0;
		if (this.Children.length != 0) {
			this.Children.forEach((child, i) => {
				let childTotalWeight = child.totalWeight();
				if (totalWeight / childTotalWeight != i) {
					let distance = totalWeight / i - childTotalWeight;
					console.log("%canswer: " + (child.Weight + distance),
						"font-size: x-large"); // tactically placed log
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

document.getElementsByTagName("pre")[0].innerText.trim().split('\n').forEach(e => {
	let [_, name, weight, children] = regex.exec(e);
	let node = new Node(name, Number(weight));
	if (children) {
		children.split(", ").forEach(name => {
			let i = forest.findIndex(x => x.Name == name);
			if (i == -1) {
				node.Children.push(new Node(name, 0));
			} else {
				node.Children.push(forest.splice(i, 1)[0]);
			}
		});
	}

	let success = false;
	for (let i = 0; i < forest.length && !success; i++) {
		success = forest[i].insertLeaf(node);
	}
	if (!success) {
		forest.push(node);
	}
});

var _ = forest[0].totalWeight();
