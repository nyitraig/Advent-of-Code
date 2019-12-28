import sys

w, h = 25, 6
input = [int(x) for x in open(sys.argv[1]).read().strip()]
input = [input[x:x + w * h] for x in range(0, len(input), w * h)]
(_, result) = min([(x.count(0), x.count(1) * x.count(2)) for x in input])
print(result)
