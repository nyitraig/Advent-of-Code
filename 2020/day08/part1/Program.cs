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
            var input = File.ReadLines(inputFilePath).Select(x =>
            {
                var instruction = x.Split();
                var operation = instruction[0];
                var argument = int.Parse(instruction[1]);
                return (operation, argument, executed: false);
            }).ToList();
            var accumulator = 0;
            var i = 0;
            while (true)
            {
                var (operation, argument, executed) = input[i];
                if (executed)
                {
                    break;
                }
                input[i] = (operation, argument, executed: true);
                if (operation == "acc")
                {
                    accumulator += argument;
                    i += 1;
                }
                if (operation == "jmp")
                {
                    i += argument;
                }
                if (operation == "nop")
                {
                    i += 1;
                }
            }
            Console.WriteLine(accumulator);
        }
    }
}
