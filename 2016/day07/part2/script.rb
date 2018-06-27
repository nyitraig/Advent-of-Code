def get_aba(arr)
  arr.map { |str| Array(0..str.size - 3).map { |i| str[i, 3] }.select { |x| x[0] == x[2] && x[0] != x[1] } }.flatten
end

puts File.readlines("input").map { |x| x.split(/\[|\]/).partition.with_index { |_, i| i.even? } }
  .count { |a, b| get_aba(a).any? { |x| get_aba(b).include?(x[1] + x[0] + x[1]) } }
