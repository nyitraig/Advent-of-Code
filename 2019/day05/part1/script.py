import sys

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
id = 1

i = 0
while input[i] != 99:
    opc = input[i] % 100
    mp1 = int(input[i] / 100 % 10)
    mp2 = int(input[i] / 1000 % 10)
    p1 = input[i + 1] if mp1 else input[input[i + 1]]
    p2 = input[i + 2] if mp2 else input[input[i + 2]] if opc in [1, 2] else 0
    if opc == 1:
        input[input[i + 3]] = p1 + p2
    elif opc == 2:
        input[input[i + 3]] = p1 * p2
    elif opc == 3:
        input[input[i + 1]] = id
    elif opc == 4:
        print(p1)
    i += 4 if opc in [1, 2] else 2
