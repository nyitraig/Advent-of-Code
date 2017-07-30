/* --- Part Two ---
 * Realizing the error of his ways, Santa has switched to a better model of
 * determining whether a string is naughty or nice. None of the old rules
 * apply, as they are all clearly ridiculous.
 * Now, a nice string is one with all of the following properties:
 * - It contains a pair of any two letters that appears at least twice in
 *   the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but
 *   not like aaa (aa, but it overlaps).
 * - It contains at least one letter which repeats with exactly one letter
 *   between them, like xyx, abcdefeghi (efe), or even aaa.
 * For example:
 * - qjhvhtzxzqqjkmpb is nice because is has a pair that appears twice (qj)
 *   and a letter that repeats with exactly one letter between them (zxz).
 * - xxyxx is nice because it has a pair that appears twice and a letter
 *   that repeats with one between, even though the letters used by each
 *   rule overlap.
 * - uurcxstgmygtbstg is naughty because it has a pair (tg) but no repeat
 *   with a single letter between them.
 * - ieodomkazucvgmuy is naughty because it has a repeating letter with one
 *   between (odo), but no pair that appears twice.
 * How many strings are nice under these new rules?
 */

#include <iostream>
#include <fstream>
#include <string>

bool rule1 (const std::string& s) { // has a re-appearing pair of two letters
	for (int i = 0; i < s.size() - 1; i++) {
		std::size_t found = s.find(std::string() + s[i] + s[i + 1]);
		if (found != i && found != i + 1 && found != i - 1)
			return true;
	}
	return false;
}

bool rule2 (const std::string& s) { // has a repeating letter with one between
	for (int i = 0; i < s.size() - 2; i++)
		if (s[i] == s[i + 2])
			return true;
	return false;
}

int main () {
	int result = 0;
	std::string s;
	std::ifstream ifs("./day05/input.txt", std::ifstream::binary);
	if (!ifs.is_open()) {
		std::cout << "Can't open file";
		return 1;
	}
	while (ifs >> s)
		if (rule1(s) && rule2(s))
			result++;
	std::cout << result;
	return 0;
}
