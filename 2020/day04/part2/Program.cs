using System;
using System.IO;
using System.Text.RegularExpressions;

namespace AdventOfCode
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = Regex.Split(File.ReadAllText(inputFilePath), @"\n{2,}");
            var result = 0;
            foreach (var passport in input)
            {
                var byrRegex = new Regex(@"byr:(?<byr>\d{4})(?!\S)");
                var iyrRegex = new Regex(@"iyr:(?<iyr>\d{4})(?!\S)");
                var eyrRegex = new Regex(@"eyr:(?<eyr>\d{4})(?!\S)");
                var hgtRegex = new Regex(@"hgt:(?<hgt>\d+)(?<unit>cm|in)(?!\S)");
                var hclRegex = new Regex(@"hcl:#[0-9a-f]{6}(?!\S)");
                var eclRegex = new Regex(@"ecl:(amb|blu|brn|gry|grn|hzl|oth)(?!\S)");
                var pidRegex = new Regex(@"pid:\d{9}(?!\S)");

                var byrMatch = byrRegex.Match(passport);
                var iyrMatch = iyrRegex.Match(passport);
                var eyrMatch = eyrRegex.Match(passport);
                var hgtMatch = hgtRegex.Match(passport);

                if (!byrMatch.Success ||
                    !iyrMatch.Success ||
                    !eyrMatch.Success ||
                    !hgtMatch.Success ||
                    !hclRegex.IsMatch(passport) ||
                    !eclRegex.IsMatch(passport) ||
                    !pidRegex.IsMatch(passport))
                {
                    continue;
                }

                var byr = int.Parse(byrMatch.Groups["byr"].Value);
                if (byr < 1920 || byr > 2002)
                {
                    continue;
                }

                var iyr = int.Parse(iyrMatch.Groups["iyr"].Value);
                if (iyr < 2010 || iyr > 2020)
                {
                    continue;
                }

                var eyr = int.Parse(eyrMatch.Groups["eyr"].Value);
                if (eyr < 2020 || eyr > 2030)
                {
                    continue;
                }

                var hgt = int.Parse(hgtMatch.Groups["hgt"].Value);
                var hgtUnit = hgtMatch.Groups["unit"].Value;
                if ((hgtUnit != "cm" || hgt < 150 || hgt > 193) && (hgtUnit != "in" || hgt < 59 || hgt > 76))
                {
                    continue;
                }

                result++;
            }
            Console.WriteLine(result);
        }
    }
}
