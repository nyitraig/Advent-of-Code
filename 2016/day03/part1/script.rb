puts File.readlines("input").map { |line| line.split.map(&:to_i) }
  .count { |a, b, c| a + b > c && a + c > b && b + c > a }
