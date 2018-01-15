/* --- Part Two ---
 * The programs explain the situation: they can't get down. Rather, they could
 * get down, if they weren't expending all of their energy trying to keep the
 * tower balanced. Apparently, one program has the wrong weight, and until it's
 * fixed, they're stuck here.
 * For any program holding a disc, each program standing on that disc forms
 * a sub-tower. Each of those sub-towers are supposed to be the same weight,
 * or the disc itself isn't balanced. The weight of a tower is the sum
 * of the weights of the programs in that tower.
 * In the example above, this means that for ugml's disc to be balanced, gyxo,
 * ebii, and jptl must all have the same weight, and they do: 61.
 * However, for tknk to be balanced, each of the programs standing on its disc
 * and all programs above it must each match.
 * This means that the following sums must all be the same:
 * - ugml + (gyxo + ebii + jptl) = 68 + (61 + 61 + 61) = 251
 * - padx + (pbga + havc + qoyq) = 45 + (66 + 66 + 66) = 243
 * - fwft + (ktlj + cntj + xhth) = 72 + (57 + 57 + 57) = 243
 * As you can see, tknk's disc is unbalanced: ugml's stack is heavier than
 * the other two. Even though the nodes above ugml are balanced, ugml itself is
 * too heavy: it needs to be 8 units lighter for its stack to weigh 243 and
 * keep the towers balanced. If this change were made, its weight would be 60.
 * Given that exactly one program is the wrong weight, what would its weight
 * need to be to balance the entire tower?
 */

"use strict";

function Node (name, weight) {
	this.Name     = name;
	this.Weight   = weight;
	this.Children = [];
}

function insertLeaf (node, leaf) {
	var success = false;
	node.Children.forEach((elem, i) => {
		if (elem.Weight == 0 && elem.Name == leaf.Name) {
			node.Children[i] = leaf;
			success = true;
		} else {
			success = success || insertLeaf(node.Children[i], leaf);
		}
	});
	return success;
}

function towerWeight (node) {
	if (node.Children.length == 0) {
		return node.Weight;
	}
	var sum = 0;
	node.Children.forEach((child, i) => {
		var weight = towerWeight(child);
		if (sum / weight != i) {
			var distance = sum / i - weight;
			console.log(child.Weight + distance);
			sum += distance;
		}
		sum += weight;
	});
	return sum + node.Weight;
}

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().replace(/&gt;/g, ">").split('\n');
var re = /(.*) \((.*)\)(?: -> (.*))?/;
var nodes = [];

input.forEach(line => {
	var match = re.exec(line);
	var node = new Node(match[1], parseInt(match[2]));
	if (match[3] != null) {
		match[3].split(", ").forEach(name => {
			var i = nodes.findIndex(x => x.Name == name);
			if (i == -1) {
				node.Children.push(new Node(name, 0));
			} else {
				node.Children.push(nodes.splice(i, 1)[0]);
			}
		});
	}
	var success = false;
	nodes.forEach((elem, i) => success = success || insertLeaf(nodes[i], node));
	if (!success) {
		nodes.push(node);
	}
});

var temp = towerWeight(nodes[0]);
