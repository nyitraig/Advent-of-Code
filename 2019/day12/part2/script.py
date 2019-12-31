import sys
import re
from typing import List, Tuple
from math import gcd

def period(position: List[Tuple[int, int]]) -> int:
    positions = [position]
    while True:
        temp = []
        for p1, v1 in positions[-1]:
            v1 += sum([1 for p2, _ in positions[-1] if p1 < p2])
            v1 -= sum([1 for p2, _ in positions[-1] if p1 > p2])
            temp += [(p1, v1)]
        temp = [(p + v, v) for p, v in temp]
        if temp == position:
            break
        positions += [temp]
    return len(positions)

pattern = r'<x=(-?\d+), y=(-?\d+), z=(-?\d+)>'
input = [re.match(pattern, x).groups() for x in open(sys.argv[1]).read().strip().split('\n')]
input = [((int(x), int(y), int(z)), (0, 0, 0)) for x, y, z in input]

px = period([(x, vx) for (x, _, _), (vx, _, _) in input])
py = period([(y, vy) for (_, y, _), (_, vy, _) in input])
pz = period([(z, vz) for (_, _, z), (_, _, vz) in input])

lcm = lambda a, b: a * b // gcd(a, b)
print(lcm(px, lcm(py, pz)))
