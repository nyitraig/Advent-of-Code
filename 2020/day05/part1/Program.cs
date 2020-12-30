using System;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static int GetSeatId(string pass)
        {
            var row = Convert.ToInt32(pass[0..7].Replace('F', '0').Replace('B', '1'), 2);
            var column = Convert.ToInt32(pass[7..].Replace('L', '0').Replace('R', '1'), 2);
            return row * 8 + column;
        }

        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadAllLines(inputFilePath);
            Console.WriteLine(input.Max(GetSeatId));
        }
    }
}
