import sys

from intcode import Computer

def on_computer_requiring_input(computer: Computer) -> None:
    computer.provide_input(panels.get((x, y), 0))

def on_computer_value_outputted(computer: Computer, output: int) -> None:
    global is_painting, panels, x, y, u, v
    if is_painting:
        panels[(x, y)] = output
    else:
        u, v = (-v, u) if output else (v, -u)
        x, y = (x + u, y + v)
    is_painting = not is_painting

def on_computer_halted(computer: Computer) -> None:
    print(len(panels))

input = [int(x) for x in open(sys.argv[1]).read().strip().split(',')]

x, y = (0, 0)
u, v = (0, -1)
panels = {}
is_painting = True
computer = Computer(input)
computer.requiring_input += on_computer_requiring_input
computer.value_outputted += on_computer_value_outputted
computer.halted += on_computer_halted
computer.run()
