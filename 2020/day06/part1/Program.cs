using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = Regex.Split(File.ReadAllText(inputFilePath), @"\n{2,}");
            var result = input.Sum(x => x.Replace("\n", "").ToHashSet().Count);
            Console.WriteLine(result);
        }
    }
}
