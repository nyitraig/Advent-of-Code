import sys

from intcode import Computer

def on_computer_value_outputted(computer: Computer, output: int) -> None:
    global i, x, y, bx, px, screen, score
    if i % 3 == 0:
        x = output
    if i % 3 == 1:
        y = output
    if i % 3 == 2:
        if x == -1 and y == 0:
            score = output
        if output == 3:
            px = x
        if output == 4:
            bx = x
    i += 1

def on_computer_requiring_input(computer: Computer) -> None:
    computer.provide_input(0 if bx == px else 1 if bx > px else -1)

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]
input[0] = 2

i = 0
x, y = None, None
bx, px = None, None
screen = {}
score = None
computer = Computer(input)
computer.value_outputted += on_computer_value_outputted
computer.requiring_input += on_computer_requiring_input
computer.halted += lambda x: print(score)
computer.run()
