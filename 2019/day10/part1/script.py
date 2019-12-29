import sys
from typing import List, Tuple

def points_between(x1: int, y1: int, x2:int, y2: int) -> List[Tuple[int, int]]:
    if x1 != x2:
        l = lambda x: (x - x1) * (y2 - y1) / (x2 - x1) + y1
        return [(x, int(l(x))) for x in range(x1, x2, 1 if x1 < x2 else -1) if l(x).is_integer()][1:]
    else:
        return [(x1, y) for y in range(y1, y2, 1 if y1 < y2 else -1)][1:]

input = open(sys.argv[1]).read().strip().split('\n')
input = [(j, i) for i, l in enumerate(input) for j, _ in enumerate(l) if input[i][j] == '#']

result = []
for p1 in input:
    points = [points_between(*p1, *p2) for p2 in input if p1 != p2]
    result += [sum([1 for x in points if not len(x) or all([y not in input for y in x])])]

print(max(result))
