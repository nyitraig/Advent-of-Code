/* --- Part Two ---
 * Now, given the same instructions, find the position of the first character
 * that causes him to enter the basement (floor -1). The first character in
 * the instructions has position 1, the second character has position 2, and
 * so on.
 * For example:
 * - ) causes him to enter the basement at character position 1.
 * - ()()) causes him to enter the basement at character position 5.
 * What is the position of the character that causes Santa to first enter the
 * basement?
 */

#include <iostream>
#include <fstream>

int main () {
	int floor = 0, position = 0;
	std::ifstream ifs("./day01/input.txt", std::ifstream::binary);
	char c;
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (ifs >> c) {
		position++;
		switch (c) {
			case '(' : floor++; break;
			case ')' : floor--; break;
			default  : std::cout << "Corrupt input"; return 1; break;
		}
		if (floor < 0)
			break;
	}
	ifs.close();
	std::cout << position;
	return 0;
}
