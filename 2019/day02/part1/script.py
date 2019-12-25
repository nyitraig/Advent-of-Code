import sys

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
input[1] = 12
input[2] = 2

for i in range(0, len(input), 4):
    if input[i] == 99:
        break
    a, b, c, d = input[i:i + 4]
    if a == 1:
        input[d] = input[b] + input[c]
    elif a == 2:
        input[d] = input[b] * input[c]

print(input[0])
