puts File.readlines("input").map { |x| x.strip.chars }.reduce(&:zip)
  .map { |x| x.flatten.group_by(&:dup).values.sort_by(&:size).first[0] }.join
