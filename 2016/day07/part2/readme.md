## --- Part Two ---

You would also like to know which IPs support __SSL__ (super-secret listening).

An IP supports SSL if it has an Area-Broadcast Accessor, or __ABA__, anywhere in the supernet sequences (outside any square bracketed sections), and a corresponding Byte Allocation Block, or __BAB__, anywhere in the hypernet sequences. An ABA is any three-character sequence which consists of the same character twice with a different character between them, such as `xyx` or `aba`. A corresponding BAB is the same characters but in reversed positions: `yxy` and `bab`, respectively.

For example:

- `aba[bab]xyz` supports SSL (`aba` outside square brackets with corresponding `bab` within square brackets).
- `xyx[xyx]xyx` does __not__ support SSL (`xyx`, but no corresponding `yxy`).
- `aaa[kek]eke` supports SSL (`eke` in supernet with corresponding `kek` in hypernet; the `aaa` sequence is not related, because the interior character must be different).
- `zazbz[bzb]cdb` supports SSL (`zaz` has no corresponding `aza`, but `zbz` has a corresponding `bzb`, even though `zaz` and `zbz` overlap).

__How many IPs__ in your puzzle input support SSL?
