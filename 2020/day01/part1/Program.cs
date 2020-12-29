using System;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static int Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadLines(inputFilePath).Select(int.Parse).ToList();
            foreach (var x in input)
            {
                foreach (var y in input)
                {
                    if (x + y == 2020)
                    {
                        Console.WriteLine(x * y);
                        return 0;
                    }
                }
            }
            return 1;
        }
    }
}
