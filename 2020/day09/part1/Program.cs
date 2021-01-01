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
            var input = File.ReadLines(inputFilePath).Select(long.Parse).ToList();
            for (int i = 25; i < input.Count; i++)
            {
                var num = input[i];
                var slice = input.GetRange(i - 25, 25);
                if (!slice.Any(x => slice.Contains(num - x)))
                {
                    Console.WriteLine(num);
                    return 0;
                }
            }
            return 1;
        }
    }
}
