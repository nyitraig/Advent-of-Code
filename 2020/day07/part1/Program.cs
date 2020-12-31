using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

namespace AdventOfCode
{
    class Program
    {
        static HashSet<string> GetContainers(string[] rules, string color)
        {
            var containers = rules.Where(x => x.Contains(color) && !x.StartsWith(color)).Select(x => x.Split(" bags")[0]);
            var result = new HashSet<string>(containers);
            foreach (var container in containers)
            {
                result.UnionWith(GetContainers(rules, container));
            }
            return result;
        }
        static void Main(string[] args)
        {
            var inputFilePath = args[0];
            var input = File.ReadAllLines(inputFilePath);
            Console.WriteLine(GetContainers(input, "shiny gold").Count);
        }
    }
}
