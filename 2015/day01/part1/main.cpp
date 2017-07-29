/* --- Day 1: Not Quite Lisp ---
 * Santa is trying to deliver presents in a large apartment building, but he
 * can't find the right floor - the directions he got are a little confusing.
 * He starts on the ground floor (floor 0) and then follows the instructions
 * one character at a time.
 * An opening parenthesis, (, means he should go up one floor, and a closing
 * parenthesis, ), means he should go down one floor.
 * The apartment building is very tall, and the basement is very deep; he will
 * never find the top or bottom floors.
 * For example:
 * - (()) and ()() both result in floor 0.
 * - ((( and (()(()( both result in floor 3.
 * - ))((((( also results in floor 3.
 * - ()) and ))( both result in floor -1 (the first basement level).
 * - ))) and )())()) both result in floor -3.
 * To what floor do the instructions take Santa?
 */

#include <iostream>
#include <fstream>

int main () {
	int floor = 0;
	std::ifstream ifs("./day01/input.txt", std::ifstream::binary);
	char c;
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (ifs >> c)
		switch (c) {
			case '(' : floor++; break;
			case ')' : floor--; break;
			default  : std::cout << "Corrupt input"; return 1; break;
		}
	ifs.close();
	std::cout << floor;
	return 0;
}
