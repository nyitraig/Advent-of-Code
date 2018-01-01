/* --- Day 7: Recursive Circus ---
 * Wandering further through the circuits of the computer, you come upon a
 * tower of programs that have gotten themselves into a bit of trouble.
 * A recursive algorithm has gotten out of hand, and now they're balanced
 * precariously in a large tower.
 * One program at the bottom supports the entire tower. It's holding a large
 * disc, and on the disc are balanced several more sub-towers. At the bottom
 * of these sub-towers, standing on the bottom disc, are other programs, each
 * holding their own disc, and so on. At the very tops of these
 * sub-sub-sub-...-towers, many programs stand simply keeping the disc below
 * them balanced but with no disc of their own.
 * You offer to help, but first you need to understand the structure of these
 * towers. You ask each program to yell out their name, their weight, and
 * (if they're holding a disc) the names of the programs immediately above
 * them balancing on that disc. You write this information down (your puzzle
 * input). Unfortunately, in their panic, they don't do this in an orderly
 * fashion; by the time you're done, you're not sure which program gave which
 * information.
 * For example, if your list is the following:
 *   pbga (66)
 *   xhth (57)
 *   ebii (61)
 *   havc (66)
 *   ktlj (57)
 *   fwft (72) -> ktlj, cntj, xhth
 *   qoyq (66)
 *   padx (45) -> pbga, havc, qoyq
 *   tknk (41) -> ugml, padx, fwft
 *   jptl (61)
 *   ugml (68) -> gyxo, ebii, jptl
 *   gyxo (61)
 *   cntj (57)
 * ...then you would be able to recreate the structure of the towers
 * that looks like this:
 *                   gyxo
 *                 /
 *            ugml - ebii
 *          /      \
 *         |         jptl
 *         |
 *         |         pbga
 *        /        /
 *   tknk --- padx - havc
 *        \        \
 *         |         qoyq
 *         |
 *         |         ktlj
 *          \      /
 *            fwft - cntj
 *                 \
 *                   xhth
 * In this example, tknk is at the bottom of the tower (the bottom program),
 * and is holding up ugml, padx, and fwft. Those programs are, in turn, holding
 * up other programs; in this example, none of those programs are holding up
 * any other programs, and are all the tops of their own towers. (The actual
 * tower balancing in front of you is much larger.)
 * Before you're ready to help them, you need to make sure your information is
 * correct. What is the name of the bottom program?
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

console.log(nodes[0].Name);
