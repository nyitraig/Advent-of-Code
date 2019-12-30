import sys

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
computer = Computer(input)
computer.requiring_input += lambda computer: computer.provide_input(5)
computer.run()
print(computer.output)
