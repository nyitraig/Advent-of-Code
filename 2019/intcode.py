from typing import List, Optional

class Event:
    """from https://stackoverflow.com/a/57069782"""
    def __init__(self):
        self.listeners = []

    def __iadd__(self, listener):
        """Shortcut for using += to add a listener."""
        self.listeners.append(listener)
        return self

    def notify(self, *args, **kwargs):
        for listener in self.listeners:
            listener(*args, **kwargs)

class Computer:
    def __init__(self, program: List[int]):
        self.program: List[int] = program.copy()
        self.is_halted: bool = False
        self.is_waiting_for_input: bool = False
        self.output: Optional[int] = None

        # events
        self.requiring_input: Event = Event()
        self.value_outputted: Event = Event()
        self.halted: Event = Event()

        self._ptr: int = 0
        self._rb: int = 0
        self._opc: Optional[int] = None
        self._mp1: Optional[int] = None
        self._mp2: Optional[int] = None
        self._mp3: Optional[int] = None
        self._inputs: List[int] = []

    def run(self) -> None:
        while not self.is_halted and not self.is_waiting_for_input:
            self._process_instruction()

    def provide_input(self, input: int) -> None:
        self._inputs += [input]
        self.is_waiting_for_input = False

    def _process_instruction(self) -> None:
        opc = self._read_memory(self._ptr)
        self._opc = opc % 100
        self._mp1 = int(opc / 100 % 10)
        self._mp2 = int(opc / 1000 % 10)
        self._mp3 = int(opc / 10000 % 10)
        {
            1: self._add,
            2: self._multiply,
            3: self._input,
            4: self._output,
            5: self._jump_if_true,
            6: self._jump_if_false,
            7: self._less_than,
            8: self._equals,
            9: self._adjust_relative_base,
            99: self._halt
        }.get(self._opc, self._halt)()

    def _get_parameter(self, index: int, mode: int) -> int:
        return self._read_memory(self._get_parameter_address(index, mode))

    def _get_parameter_address(self, index: int, mode: int) -> int:
        return {
            0: self._read_memory(index),
            1: index,
            2: self._rb + self._read_memory(index)
        }.get(mode, self._read_memory(index))

    def _read_memory(self, address: int) -> int:
        if address >= len(self.program):
            self.program += [0] * (address - len(self.program) + 1)
        return self.program[address]

    def _write_memory(self, address: int, value: int) -> None:
        if address >= len(self.program):
            self.program += [0] * (address - len(self.program) + 1)
        self.program[address] = value

    def _add(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        ap3 = self._get_parameter_address(self._ptr + 3, self._mp3)
        self._write_memory(ap3, p1 + p2)
        self._ptr += 4

    def _multiply(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        ap3 = self._get_parameter_address(self._ptr + 3, self._mp3)
        self._write_memory(ap3, p1 * p2)
        self._ptr += 4

    def _input(self) -> None:
        if not len(self._inputs):
            self.is_waiting_for_input = True
            self.requiring_input.notify(self)
        else:
            ap1 = self._get_parameter_address(self._ptr + 1, self._mp1)
            self._write_memory(ap1, self._inputs.pop(0))
            self._ptr += 2

    def _output(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        self.output = p1
        self.value_outputted.notify(self, p1)
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
        ap3 = self._get_parameter_address(self._ptr + 3, self._mp3)
        self._write_memory(ap3, int(p1 < p2))
        self._ptr += 4

    def _equals(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        p2 = self._get_parameter(self._ptr + 2, self._mp2)
        ap3 = self._get_parameter_address(self._ptr + 3, self._mp3)
        self._write_memory(ap3, int(p1 == p2))
        self._ptr += 4

    def _adjust_relative_base(self) -> None:
        p1 = self._get_parameter(self._ptr + 1, self._mp1)
        self._rb += p1
        self._ptr += 2

    def _halt(self) -> None:
        self.is_halted = True
        self.halted.notify(self)
