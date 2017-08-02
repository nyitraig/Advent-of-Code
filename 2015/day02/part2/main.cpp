/* --- Part Two ---
 * The elves are also running low on ribbon. Ribbon is all the same width, so
 * they only have to worry about the length they need to order, which they
 * would again like to be exact.
 * The ribbon required to wrap a present is the shortest distance around its
 * sides, or the smallest perimeter of any one face. Each present also
 * requires a bow made out of ribbon as well; the feet of ribbon required for
 * the perfect bow is equal to the cubic feet of volume of the present. Don't
 * ask how they tie the bow, though; they'll never tell.
 * For example:
 * - A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon
 *   to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a
 *   total of 34 feet.
 * - A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon
 *   to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a
 *   total of 14 feet.
 * How many total feet of ribbon should they order?
 */

#include <iostream>
#include <fstream>
#include <string>
#include <sstream>

int main () {
	int total = 0, l, w, h;
	std::string line;
	char temp;
	std::ifstream ifs("./day02/input.txt", std::ifstream::binary);
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (std::getline(ifs, line)) {
		std::istringstream iss(line);
		iss >> l >> temp >> w >> temp >> h;
		if (l >= w && l >= h)
			total += 2 * (w + h);
		else if (w >= l && w >= h)
			total += 2 * (l + h);
		else if (h >= l && h >= w)
			total += 2 * (l + w);
		total += l * w * h;
	}
	ifs.close();
	std::cout << total;
	return 0;
}
