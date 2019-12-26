import sys
from itertools import product

def run(program, noun, verb):
    temp = program.copy()
    temp[1] = noun
    temp[2] = verb
    for i in range(0, len(temp), 4):
        if temp[i] == 99:
            return temp[0]
        a, b, c, d = temp[i:i + 4]
        if a == 1:
            temp[d] = temp[b] + temp[c]
        elif a == 2:
            temp[d] = temp[b] * temp[c]

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

for i, j in product(range(100), range(100)):
    if run(input, i, j) == 19690720:
        print(100 * i + j)
        break
