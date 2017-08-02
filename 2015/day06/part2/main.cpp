/* --- Part Two ---
 * You just finish implementing your winning light pattern when you realize
 * you mistranslated Santa's message from Ancient Nordic Elvish.
 * The light grid you bought actually has individual brightness controls; each
 * light can have a brightness of zero or more. The lights all start at zero.
 * The phrase turn on actually means that you should increase the brightness
 * of those lights by 1.
 * The phrase turn off actually means that you should decrease the brightness
 * of those lights by 1, to a minimum of zero.
 * The phrase toggle actually means that you should increase the brightness of
 * those lights by 2.
 * What is the total brightness of all lights combined after following Santa's
 * instructions?
 * For example:
 * - turn on 0,0 through 0,0 would increase the total brightness by 1.
 * - toggle 0,0 through 999,999 would increase the total brightness by
 *   2000000.
 */

#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <vector>

int main () {
	int result = 0;
	std::vector<std::vector<int> > lights(1000, std::vector<int>(1000, 0));
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
						lights[i][j]++;
					else if (str == "off")
						lights[i][j] -= (lights[i][j] > 0) ? 1 : 0;
		}
		if (str == "toggle") {
			iss >> x0 >> c >> y0 >> str >> x1 >> c >> y1;
			for (int i = x0; i <= x1; i++)
				for (int j = y0; j <= y1; j++)
					lights[i][j] += 2;
		}
	}
	ifs.close();
	for (int i = 0; i < 1000; i++)
		for (int j = 0; j < 1000; j++)
			result += lights[i][j];
	std::cout << result;
	return 0;
}
