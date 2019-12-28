import sys

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
computer = Computer(input)
computer.input = [5]
computer.run()
print(computer.output)
