import sys
from itertools import product

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

for i, j in product(range(100), range(100)):
    computer = Computer(input)
    computer.program[1] = i
    computer.program[2] = j
    computer.run()
    if computer.program[0] == 19690720:
        print(100 * i + j)
        break
