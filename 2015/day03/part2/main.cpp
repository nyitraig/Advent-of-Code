/* --- Part Two ---
 * The next year, to speed up the process, Santa creates a robot version of
 * himself, Robo-Santa, to deliver presents with him.
 * Santa and Robo-Santa start at the same location (delivering two presents to
 * the same starting house), then take turns moving based on instructions from
 * the elf, who is eggnoggedly reading from the same script as the previous
 * year.
 * This year, how many houses receive at least one present?
 * For example:
 * - ^v delivers presents to 3 houses, because Santa goes north, and then
 *   Robo-Santa goes south.
 * - ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end
 *   up back where they started.
 * - ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one
 *   direction and Robo-Santa going the other.
 */

#include <iostream>
#include <fstream>
#include <set>
#include <utility> // std::pair

int main () {
	std::set<std::pair<int, int> > houses;
	houses.insert(std::make_pair(0, 0));
	int santaX = 0, santaY = 0, rSantaX = 0, rSantaY = 0;
	bool santasTurn = true;
	std::ifstream ifs("./day03/input.txt", std::ifstream::binary);
	char c;
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (ifs >> c) {
		switch (c) {
			case '^' : if (santasTurn) santaY++; else rSantaY++; break;
			case 'v' : if (santasTurn) santaY--; else rSantaY--; break;
			case '>' : if (santasTurn) santaX++; else rSantaX++; break;
			case '<' : if (santasTurn) santaX--; else rSantaX--; break;
			default  : std::cout << "Corrupt input"; return 1; break;
		}
		if (santasTurn)
			houses.insert(std::make_pair(santaX, santaY));
		else
			houses.insert(std::make_pair(rSantaX, rSantaY));
		santasTurn = !santasTurn;
	}
	ifs.close();
	std::cout << houses.size();
	return 0;
}
