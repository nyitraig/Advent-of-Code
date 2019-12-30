import sys
from itertools import permutations

from intcode import Computer

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

signals = []
for p in permutations(range(5, 10)):
    computers = [Computer(input) for _ in range(5)]
    for i, c in enumerate(computers):
        c.provide_input(p[i])
        c.run()
    signal = 0
    while not computers[-1].is_halted:
        for c in computers:
            c.provide_input(signal)
            c.run()
            signal = c.output
    signals += [signal]
print(max(signals))
