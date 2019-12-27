import sys
import networkx as nx

input = open(sys.argv[1]).read().strip().split('\n')
G = nx.Graph()
G.add_edges_from([(y[0], y[1]) for y in [x.split(')') for x in input]])
print(nx.shortest_path_length(G, source='YOU', target='SAN') - 2)
