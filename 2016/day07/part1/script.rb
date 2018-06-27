def abba?(str)
  Array(0..str.size - 4).map { |i| str[i, 4] }.any? { |x| x == x.reverse && x[0] != x[1] }
end

puts File.readlines("input").map { |x| x.split(/\[|\]/).partition.with_index { |_, i| i.even? } }
  .count { |a, b| a.any? { |x| abba?(x) } && b.none? { |x| abba?(x) } }
