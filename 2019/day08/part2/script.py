import sys

w, h = 25, 6
input = [int(x) for x in open(sys.argv[1]).read().strip()]
input = [input[x:x + w * h] for x in range(0, len(input), w * h)]
password = ''
for i, e in enumerate(zip(*input)):
    a = list(filter(lambda x: x != 2, e)) + [2]
    password += {
        0: ' ',
        1: '█',
        2: '░'
    }.get(a[0])
    password += '' if (i + 1) % w else '\n'
print(password.strip())
