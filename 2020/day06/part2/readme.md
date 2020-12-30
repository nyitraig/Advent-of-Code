## --- Part Two ---

As you finish the last group's customs declaration, you notice that you misread one word in the instructions:

You don't need to identify the questions to which __anyone__ answered "yes"; you need to identify the questions to which __everyone__ answered "yes"!

Using the same example as above:

```
abc

a
b
c

ab
ac

a
a
a
a

b
```

This list represents answers from five groups:

 - In the first group, everyone (all 1 person) answered "yes" to __`3`__ questions: `a`, `b`, and `c`.
 - In the second group, there is __no__ question to which everyone answered "yes".
 - In the third group, everyone answered yes to only __`1`__ question, `a`. Since some people did not answer "yes" to `b` or `c`, they don't count.
 - In the fourth group, everyone answered yes to only __`1`__ question, `a`.
 - In the fifth group, everyone (all 1 person) answered "yes" to __`1`__ question, `b`.

In this example, the sum of these counts is `3 + 0 + 1 + 1 + 1` = __`6`__.

For each group, count the number of questions to which __everyone__ answered "yes". __What is the sum of those counts?__
