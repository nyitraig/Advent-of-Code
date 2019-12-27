import sys

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
id = 5

i = 0
while input[i] != 99:
    opc = input[i] % 100
    mp1 = int(input[i] / 100 % 10)
    p1 = input[i + 1] if mp1 else input[input[i + 1]]
    if opc in [1, 2, 5, 6, 7, 8]:
        mp2 = int(input[i] / 1000 % 10)
        p2 = input[i + 2] if mp2 else input[input[i + 2]]
    if opc == 1:
        input[input[i + 3]] = p1 + p2
    elif opc == 2:
        input[input[i + 3]] = p1 * p2
    elif opc == 3:
        input[input[i + 1]] = id
    elif opc == 4:
        print(p1)
    elif opc == 5:
        i = p2 if p1 else i + 3
    elif opc == 6:
        i = p2 if not p1 else i + 3
    elif opc == 7:
        input[input[i + 3]] = int(p1 < p2)
    elif opc == 8:
        input[input[i + 3]] = int(p1 == p2)
    i += 0 if opc in [5, 6] else 4 if opc in [1, 2, 7, 8] else 2
