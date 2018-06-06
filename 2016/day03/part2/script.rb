puts File.readlines("input").map { |line| line.split.map(&:to_i) }
  .each_slice(3).flat_map { |x, y, z| x.zip(y, z) }
  .count { |a, b, c| a + b > c && a + c > b && b + c > a }
