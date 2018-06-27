result = []

File.readlines("input").each do |line|
  i = 1
  j = 1

  line.each_char do |c|
    case c
    when "U" then i -= 1 if i > 0
    when "D" then i += 1 if i < 2
    when "L" then j -= 1 if j > 0
    when "R" then j += 1 if j < 2
    end
  end

  result.push(3 * i + j + 1)
end

puts result.join
