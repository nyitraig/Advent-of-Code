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
            var input = File.ReadAllLines(inputFilePath);
            var regex = new Regex(@"^(?<i>\d+)-(?<j>\d+)\s(?<character>[a-z]):\s(?<password>[a-z]+)$");
            var result = 0;
            foreach (var line in input)
            {
                var match = regex.Match(line);
                var i = int.Parse(match.Groups["i"].Value) - 1;
                var j = int.Parse(match.Groups["j"].Value) - 1;
                var character = char.Parse(match.Groups["character"].Value);
                var password = match.Groups["password"].Value;
                if ((password[i] == character && password[j] != character) ||
                    (password[i] != character && password[j] == character))
                {
                    result++;
                }
            }
            Console.WriteLine(result);
        }
    }
}
