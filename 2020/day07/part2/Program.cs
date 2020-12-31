using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace AdventOfCode
{
    class Program
    {
        static int CountContents(string[] rules, string color)
        {
            var rule = rules.First(x => x.StartsWith(color));
            var regex = new Regex(@"(?<amount>\d+) (?<color>[a-z]+ [a-z]+) bags?");
            var matches = regex.Matches(rule);
            var result = 0;
            foreach (Match match in matches)
            {
                result += int.Parse(match.Groups["amount"].Value) * (CountContents(rules, match.Groups["color"].Value) + 1);
            }
            return result;
        }
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadAllLines(inputFilePath);
            Console.WriteLine(CountContents(input, "shiny gold"));
        }
    }
}
