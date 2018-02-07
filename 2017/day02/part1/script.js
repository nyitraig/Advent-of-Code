"use strict";

var checksum = 0;

document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').forEach(e => {
	var arr = e.split('\t').map(Number);
	var max = arr[0], min = arr[0];
	for (var i = 1; i < arr.length; i++) {
		max = arr[i] > max ? arr[i] : max;
		min = arr[i] < min ? arr[i] : min;
	}
	checksum += max - min;
});

console.log(checksum);
