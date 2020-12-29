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
            var input = File.ReadAllLines(inputFilePath);
            var result = 0;
            for (int i = 0, j = 0; i < input.Count(); i++, j = (j + 3) % input[0].Count())
            {
                if (input[i][j] == '#')
                {
                    result++;
                }
            }
            Console.WriteLine(result);
        }
    }
}
