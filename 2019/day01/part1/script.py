import sys

input = [int(x) for x in open(sys.argv[1]).read().strip().split('\n')]
print(sum([int(x / 3) - 2 for x in input]))
