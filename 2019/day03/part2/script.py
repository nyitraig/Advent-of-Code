import sys

def points(path):
    result = [(0, 0, 0)]
    for p in path:
        x, y, s = result[-1]
        u, v = {
            'U': (0, 1),
            'D': (0, -1),
            'L': (1, 0),
            'R': (-1, 0)
        }.get(p[0], (0, 0))
        result += [(x + u * i, y + v * i, s + i) for i in range(1, int(p[1:]) + 1)]
    return result[1:]

w1, w2 = [x.split(',') for x in open(sys.argv[1]).read().strip().split('\n')]
p1, p2 = points(w1), points(w2)
ints = list(set([(x1, y1) for x1, y1, _ in p1]) & set((x2, y2) for x2, y2, _ in p2))
ip1 = [(x, y, s) for x, y, s in p1 if (x, y) in ints]
ip2 = [(x, y, s) for x, y, s in p2 if (x, y) in ints]
print(min([min([s1 for x1, y1, s1 in ip1 if x1 == x and y1 == y]) +
           min([s2 for x2, y2, s2 in ip2 if x2 == x and y2 == y]) for x, y in ints]))
