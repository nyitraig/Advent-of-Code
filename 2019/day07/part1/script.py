import sys
from itertools import permutations

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

signals = []
for p in [list(x) for x in permutations(range(5))]:
    computers = [Computer(input) for _ in range(5)]
    for i, c in enumerate(computers):
        c.input = [p[i]]
        c.run()
    output = 0
    for c in computers:
        c.input = [output]
        c.run()
        output = c.output
    signals += [output]
print(max(signals))
