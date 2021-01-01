using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AdventOfCode
{
    class Program
    {
        static bool Run(List<(string operation, int argument, bool executed)> program, out int accumulator)
        {
            accumulator = 0;
            for (int i = 0; i < program.Count;)
            {
                var (operation, argument, executed) = program[i];
                if (executed)
                {
                    return false;
                }
                program[i] = (operation, argument, executed: true);
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
            return true;
        }
        static int Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadLines(inputFilePath).Select(x =>
            {
                var instruction = x.Split();
                var operation = instruction[0];
                var argument = int.Parse(instruction[1]);
                return (operation, argument, executed: false);
            }).ToList();
            for (int i = 0; i < input.Count; i++)
            {
                var (operation, argument, executed) = input[i];
                if (operation == "jmp" || operation == "nop")
                {
                    var program = new List<(string operation, int argument, bool executed)>(input)
                    {
                        [i] = (operation == "jmp" ? "nop" : "jmp", argument, executed)
                    };
                    if (Run(program, out int accumulator))
                    {
                        Console.WriteLine(accumulator);
                        return 0;
                    }
                }
            }
            return 1;
        }
    }
}
