using System;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadLines(inputFilePath).Select(int.Parse).Append(0).ToList();
            input.Sort();
            var differences = input.Take(input.Count - 1).Select((v, i) => input[i + 1] - v);
            Console.WriteLine(differences.Count(x => x == 1) * (differences.Count(x => x == 3) + 1));
        }
    }
}
