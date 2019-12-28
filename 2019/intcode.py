from typing import List

class Computer:
    def __init__(self, program: List[int]):
        self._program = program.copy()
        self._ptr = 0 # instruction pointer
        self._opc = 0 # opcode
        self._mp1 = 0 # mode of 1st parameter
        self._mp2 = 0 # mode of 2nd parameter
        self._in = [] # input list
        self._out = 0 # output code
        self._is_waiting_for_input = False
        self._is_halted = False

    @property
    def program(self) -> List[int]:
        return self._program

    @program.setter
    def program(self, value: List[int]) -> None:
        self._program = value.copy()

    @property
    def is_halted(self) -> bool:
        return self._is_halted

    @property
    def input(self) -> List[int]:
        return self._in

    @input.setter
    def input(self, value: List[int]) -> None:
        self._in = value.copy()
        self._is_waiting_for_input = not bool(len(self._in))

    @property
    def output(self) -> int:
        return self._out

    def run(self) -> None:
        while not self._is_halted and not self._is_waiting_for_input:
            self._process_instruction()

    def _process_instruction(self) -> None:
        opc = self._program[self._ptr]
        self._opc = opc % 100
        self._mp1 = int(opc / 100 % 10)
        self._mp2 = int(opc / 1000 % 10)
        {
            1: self._add,
            2: self._multiply,
            3: self._input,
            4: self._output,
            5: self._jump_if_true,
            6: self._jump_if_false,
            7: self._less_than,
            8: self._equals,
            99: self._halt
        }.get(self._opc, self._halt)()

    def _get_parameter(self, index: int, mode: int) -> int:
        return self._program[index] if mode else self._program[self._program[index]]

    def _add(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._program[self._program[self._ptr + 3]] = p1 + p2
        self._ptr += 4

    def _multiply(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._program[self._program[self._ptr + 3]] = p1 * p2
        self._ptr += 4

    def _input(self) -> None:
        if not len(self._in):
            self._is_waiting_for_input = True
            return
        self._program[self._program[self._ptr + 1]] = self._in.pop(0)
        self._ptr += 2

    def _output(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        self._out = p1
        self._ptr += 2

    def _jump_if_true(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._ptr = p2 if p1 else self._ptr + 3

    def _jump_if_false(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._ptr = p2 if not p1 else self._ptr + 3

    def _less_than(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._program[self._program[self._ptr + 3]] = int(p1 < p2)
        self._ptr += 4

    def _equals(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        self._program[self._program[self._ptr + 3]] = int(p1 == p2)
        self._ptr += 4

    def _halt(self) -> None:
        self._is_halted = True
