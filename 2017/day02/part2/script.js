"use strict";

var checksum = 0;

document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n').forEach(e => {
	var arr = e.split('\t').map(Number);
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] % arr[j] == 0 && i != j) {
				checksum += arr[i] / arr[j];
			}
		}
	}
});

console.log(checksum);
