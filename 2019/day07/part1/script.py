import sys
from itertools import permutations

def run(program, inputs):
    temp = program.copy()
    i = 0
    while temp[i] != 99:
        opc = temp[i] % 100
        mp1 = int(temp[i] / 100 % 10)
        p1 = temp[i + 1] if mp1 else temp[temp[i + 1]]
        if opc in [1, 2, 5, 6, 7, 8]:
            mp2 = int(temp[i] / 1000 % 10)
            p2 = temp[i + 2] if mp2 else temp[temp[i + 2]]
        if opc == 1:
            temp[temp[i + 3]] = p1 + p2
        elif opc == 2:
            temp[temp[i + 3]] = p1 * p2
        elif opc == 3:
            temp[temp[i + 1]] = inputs.pop(0)
        elif opc == 4:
            return p1
        elif opc == 5:
            i = p2 if p1 else i + 3
        elif opc == 6:
            i = p2 if not p1 else i + 3
        elif opc == 7:
            temp[temp[i + 3]] = int(p1 < p2)
        elif opc == 8:
            temp[temp[i + 3]] = int(p1 == p2)
        i += 0 if opc in [5, 6] else 4 if opc in [1, 2, 7, 8] else 2

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
signals = []
for p in [list(x) for x in permutations([0, 1, 2, 3, 4])]:
    a = run(input, [p[0], 0])
    b = run(input, [p[1], a])
    c = run(input, [p[2], b])
    d = run(input, [p[3], c])
    e = run(input, [p[4], d])
    signals += [e]
print(max(signals))
