import sys

def fuel(mass: int) -> int:
    f = mass // 3 - 2
    return f + fuel(f) if f > 0 else 0

input = [int(x) for x in open(sys.argv[1]).read().strip().split('\n')]
print(sum([fuel(x) for x in input]))
