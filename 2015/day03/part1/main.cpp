/* --- Day 3: Perfectly Spherical Houses in a Vacuum ---
 * Santa is delivering presents to an infinite two-dimensional grid of houses.
 * He begins by delivering a present to the house at his starting location,
 * and then an elf at the North Pole calls him via radio and tells him where
 * to move next. Moves are always exactly one house to the north (^), south (v),
 * east (>), or west (<). After each move, he delivers another present to the
 * house at his new location.
 * However, the elf back at the north pole has had a little too much eggnog,
 * and so his directions are a little off, and Santa ends up visiting some
 * houses more than once. How many houses receive at least one present?
 * For example:
 * - > delivers presents to 2 houses: one at the starting location, and one
 *   to the east.
 * - ^>v< delivers presents to 4 houses in a square, including twice to the
 *   house at his starting/ending location.
 * - ^v^v^v^v^v delivers a bunch of presents to some very lucky children at
 *   only 2 houses.
 */

#include <iostream>
#include <fstream>
#include <set>
#include <utility> // std::pair

int main () {
	std::set<std::pair<int, int> > houses;
	houses.insert(std::make_pair(0, 0));
	int x = 0, y = 0;
	std::ifstream ifs("./day03/input.txt", std::ifstream::binary);
	char c;
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (ifs >> c) {
		switch (c) {
			case '^' : y++; break;
			case 'v' : y--; break;
			case '>' : x++; break;
			case '<' : x--; break;
			default  : std::cout << "Corrupt input"; return 1; break;
		}
		houses.insert(std::make_pair(x, y));
	}
	std::cout << houses.size();
	return 0;
}
