using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace AdventOfCode
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadAllLines(inputFilePath);
            var regex = new Regex(@"^(?<min>\d+)-(?<max>\d+)\s(?<character>[a-z]):\s(?<password>[a-z]+)$");
            var result = 0;
            foreach (var line in input)
            {
                var match = regex.Match(line);
                var minCount = int.Parse(match.Groups["min"].Value);
                var maxCount = int.Parse(match.Groups["max"].Value);
                var character = char.Parse(match.Groups["character"].Value);
                var password = match.Groups["password"].Value;
                var characterCount = password.Count(c => c == character);
                if (characterCount >= minCount && characterCount <= maxCount)
                {
                    result++;
                }
            }
            Console.WriteLine(result);
        }
    }
}
