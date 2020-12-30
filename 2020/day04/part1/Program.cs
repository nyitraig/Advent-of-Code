using System;
using System.Collections.Generic;
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
            var requiredFields = new List<string> { "byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid" };
            var result = 0;
            foreach (var passport in input)
            {
                var presentFieldCount = 0;
                foreach (var field in requiredFields)
                {
                    if (passport.Contains(field + ":"))
                    {
                        presentFieldCount++;
                    }
                }
                if (presentFieldCount == requiredFields.Count)
                {
                    result++;
                }
            }
            Console.WriteLine(result);
        }
    }
}
