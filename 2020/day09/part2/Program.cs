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
            long invalidNumber = -1; // the solution for part 1
            for (int i = 25; i < input.Count; i++)
            {
                var num = input[i];
                var slice = input.GetRange(i - 25, 25);
                if (!slice.Any(x => slice.Contains(num - x)))
                {
                    invalidNumber = num;
                    break;
                }
            }
            for (int i = 0; i < input.Count; i++)
            {
                var j = 2;
                while (true)
                {
                    var sum = input.Skip(i).Take(j).Sum();
                    if (sum == invalidNumber)
                    {
                        Console.WriteLine(input[i] + input[i + j - 1]);
                        return 0;
                    }
                    if (sum > invalidNumber)
                    {
                        break;
                    }
                    j++;
                }
            }
            return 1;
        }
    }
}
