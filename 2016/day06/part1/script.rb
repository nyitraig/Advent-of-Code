puts File.readlines("input").map { |x| x.strip.chars }.transpose
  .map { |x| x.group_by(&:dup).values.sort_by(&:size).last[0] }.join
