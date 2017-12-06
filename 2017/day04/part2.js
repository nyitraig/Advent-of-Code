/* --- Part Two ---
 * For added security, yet another system policy has been put in place. Now,
 * a valid passphrase must contain no two words that are anagrams of each other
 * - that is, a passphrase is invalid if any word's letters can be rearranged
 * to form any other word in the passphrase.
 * - abcde fghij is a valid passphrase.
 * - abcde xyz ecdab is not valid - the letters from the third word can be
 *   rearranged to form the first word.
 * - a ab abc abd abf abj is a valid passphrase, because all letters need to
 *   be used when forming another word.
 * - iiii oiii ooii oooi oooo is valid.
 * - oiii ioii iioi iiio is not valid - any of these words can be rearranged
 *   to form any other word.
 * Under this new system policy, how many passphrases are valid?
 */

"use strict";

var input = document.getElementsByTagName("pre")[0].innerHTML.trim().split('\n');
var n = 0;

input.forEach(function (currentValue) {
	var arr = currentValue.split(' ').map(function (currentValue) {
		return currentValue.split('').sort().join('')
	});
	for (var i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) != i) {
			n++;
			break;
		}
	}
});

console.log(input.length - n);
