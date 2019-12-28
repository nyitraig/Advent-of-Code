import sys
from typing import List, Tuple

def points(path: str) -> List[Tuple[int, int]]:
    result = [(0, 0)]
    for p in path:
        x, y = result[-1]
        u, v = {
            'U': (0, 1),
            'D': (0, -1),
            'L': (1, 0),
            'R': (-1, 0)
        }.get(p[0], (0, 0))
        result += [(x + u * i, y + v * i) for i in range(1, int(p[1:]) + 1)]
    return result[1:]

w1, w2 = [x.split(',') for x in open(sys.argv[1]).read().strip().split('\n')]
p1, p2 = points(w1), points(w2)

print(min([abs(x) + abs(y) for x, y in list(set(p1) & set(p2))]))
