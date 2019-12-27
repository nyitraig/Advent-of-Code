import sys
import networkx as nx

input = open(sys.argv[1]).read().strip().split('\n')
G = nx.DiGraph()
G.add_edges_from([(y[0], y[1]) for y in [x.split(')') for x in input]])
print(sum([len(nx.algorithms.dag.descendants(G, n)) for n in list(G.nodes)]))
