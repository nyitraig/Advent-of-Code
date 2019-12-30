import sys
import re

pattern = r'<x=(-?\d+), y=(-?\d+), z=(-?\d+)>'
input = [re.match(pattern, x).groups() for x in open(sys.argv[1]).read().strip().split('\n')]
input = [((int(x), int(y), int(z)), (0, 0, 0)) for x, y, z in input]

for _ in range(1000):
    temp = []
    for (x1, y1, z1), (vx1, vy1, vz1) in input:
        vx1 += sum([1 for (x2, _, _), _ in input if x1 < x2])
        vx1 -= sum([1 for (x2, _, _), _ in input if x1 > x2])
        vy1 += sum([1 for (_, y2, _), _ in input if y1 < y2])
        vy1 -= sum([1 for (_, y2, _), _ in input if y1 > y2])
        vz1 += sum([1 for (_, _, z2), _ in input if z1 < z2])
        vz1 -= sum([1 for (_, _, z2), _ in input if z1 > z2])
        temp += [((x1, y1, z1), (vx1, vy1, vz1))]
    input = [((x + vx, y + vy, z + vz), (vx, vy, vz)) for (x, y, z), (vx, vy, vz) in temp]

print(sum([sum(map(abs, p)) * sum(map(abs, v)) for p, v in input]))
