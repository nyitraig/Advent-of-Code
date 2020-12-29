using System;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static int CountTrees(string[] map, int right, int down)
        {
            var count = 0;
            for (int i = 0, j = 0; i < map.Count(); i += down, j = (j + right) % map[0].Count())
            {
                if (map[i][j] == '#')
                {
                    count++;
                }
            }
            return count;
        }

        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadAllLines(inputFilePath);
            Console.WriteLine((long)CountTrees(input, 1, 1) *
                              CountTrees(input, 3, 1) *
                              CountTrees(input, 5, 1) *
                              CountTrees(input, 7, 1) *
                              CountTrees(input, 1, 2));
        }
    }
}
