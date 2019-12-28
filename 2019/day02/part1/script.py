import sys

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
computer = Computer(input)
computer.program[1] = 12
computer.program[2] = 2
computer.run()
print(computer.program[0])
