/* --- Day 5: Doesn't He Have Intern-Elves For This? ---
 * Santa needs help figuring out which strings in his text file are naughty or
 * nice.
 * A nice string is one with all of the following properties:
 * - It contains at least three vowels (aeiou only), like aei, xazegov, or
 *   aeiouaeiouaeiou.
 * - It contains at least one letter that appears twice in a row, like xx,
 *   abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
 * - It does not contain the strings ab, cd, pq, or xy, even if they are
 *   part of one of the other requirements.
 * For example:
 * - ugknbfddgicrmopn is nice because it has at least three vowels
 *   (u...i...o...), a double letter (...dd...), and none of the disallowed
 *   substrings.
 * - aaa is nice because it has at least three vowels and a double letter,
 *   even though the letters used by different rules overlap.
 * - jchzalrnumimnmhp is naughty because it has no double letter.
 * - haegwjzuvuyypxyu is naughty because it contains the string xy.
 * - dvszwmarrgswjxmb is naughty because it contains only one vowel.
 * How many strings are nice?
 */

#include <iostream>
#include <fstream>
#include <string>

bool rule1 (const std::string& s) { // has at least three vowels
	unsigned int n = 0;
	for (int i = 0; i < s.size(); i++)
		if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
			if (++n == 3)
				return true;
	return false;
}

bool rule2 (const std::string& s) { // has double letters
	for (int i = 0; i < s.size() - 1; i++)
		if (s[i] == s[i + 1])
			return true;
	return false;
}

bool rule3 (const std::string& s) { // contains illegal characters
	return (s.find("ab") != std::string::npos || s.find("cd") != std::string::npos ||
	        s.find("pq") != std::string::npos || s.find("xy") != std::string::npos);
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
		if (rule1(s) && rule2(s) && !rule3(s))
			result++;
	ifs.close();
	std::cout << result;
	return 0;
}
