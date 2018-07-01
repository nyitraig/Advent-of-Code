screen = Array.new(6) { Array.new(50, " ") }

File.readlines("input").each do |line|
  case line
  when /rect (\d+)x(\d+)/
    screen[0...$2.to_i].map { |x| x.fill("o", 0...$1.to_i) }
  when /rotate row y=(\d+) by (\d+)/
    screen[$1.to_i].rotate!(-$2.to_i)
  when /rotate column x=(\d+) by (\d+)/
    column = screen.transpose[$1.to_i].rotate(-$2.to_i)
    screen.each_index { |i| screen[i][$1.to_i] = column[i] }
  end
end

puts screen.flatten.count("o")
