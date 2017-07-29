/* --- Part Two ---
 * Now find one that starts with six zeroes.
 */

#include <iostream>
#include <string>
#include "../src/md5.h"

std::string toString (unsigned int num) {
	std::string result = "";
	while (num) {
		result = (char)(num % 10 + '0') + result;
		num /= 10;
	}
	return result;
}

int main () {
	const std::string input = "bgvyzdsv";
	unsigned int result = 254575;
	while (true) {
		if (md5(input + toString(++result)).find("000000") == 0)
			break;
	}
	std::cout << result;
	return 0;
}
