/* --- Day 6: Probably a Fire Hazard ---
 * Because your neighbors keep defeating you in the holiday house decorating
 * contest year after year, you've decided to deploy one million lights in a
 * 1000x1000 grid.
 * Furthermore, because you've been especially nice this year, Santa has
 * mailed you instructions on how to display the ideal lighting configuration.
 * Lights in your grid are numbered from 0 to 999 in each direction; the
 * lights at each corner are at 0,0, 0,999, 999,999, and 999,0. The
 * instructions include whether to turn on, turn off, or toggle various
 * inclusive ranges given as coordinate pairs. Each coordinate pair represents
 * opposite corners of a rectangle, inclusive; a coordinate pair like
 * 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square. The lights
 * all start turned off.
 * To defeat your neighbors this year, all you have to do is set up your
 * lights by doing the instructions Santa sent you in order.
 * For example:
 * - turn on 0,0 through 999,999 would turn on (or leave on) every light.
 * - toggle 0,0 through 999,0 would toggle the first line of 1000 lights,
 *   turning off the ones that were on, and turning on the ones that were
 *   off.
 * - turn off 499,499 through 500,500 would turn off (or leave off) the
 *   middle four lights.
 * After following the instructions, how many lights are lit?
 */

#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>

int main () {
	int result = 0;
	std::vector<std::vector<bool> > lights(1000, std::vector<bool>(1000, false));
	std::ifstream ifs("./day06/input.txt", std::ifstream::binary);
	std::string line;
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (std::getline(ifs, line)) {
		std::string str, str2;
		char c;
		int x0, y0, x1, y1;
		std::istringstream iss(line);
		iss >> str;
		if (str == "turn") {
			iss >> str >> x0 >> c >> y0 >> str2 >> x1 >> c >> y1;
			for (int i = x0; i <= x1; i++)
				for (int j = y0; j <= y1; j++)
					if (str == "on")
						lights[i][j] = true;
					else if (str == "off")
						lights[i][j] = false;
		}
		if (str == "toggle") {
			iss >> x0 >> c >> y0 >> str >> x1 >> c >> y1;
			for (int i = x0; i <= x1; i++)
				for (int j = y0; j <= y1; j++)
					lights[i][j] = !lights[i][j];
		}
	}
	ifs.close();
	for (int i = 0; i < 1000; i++)
		for (int j = 0; j < 1000; j++)
			if (lights[i][j])
				result++;
	std::cout << result;
	return 0;
}
