import sys

from intcode import Computer

def on_computer_value_outputted(computer: Computer, output: int) -> None:
    global i, x, y, screen
    if i % 3 == 0:
        x = output
    if i % 3 == 1:
        y = output
    if i % 3 == 2:
        screen[(x, y)] = output
    i += 1

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

i = 0
x, y = None, None
screen = {}
computer = Computer(input)
computer.value_outputted += on_computer_value_outputted
computer.halted += lambda x: print(sum([1 for v in screen.values() if v == 2]))
computer.run()
