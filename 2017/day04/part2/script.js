"use strict";

var n = 0;

document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').forEach(e => {
	var arr = e.split(' ').map(x => x.split('').sort().join()).sort();
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] == arr[i + 1]) {
			n--;
			break;
		}
	}
	n++;
});

console.log(n);
