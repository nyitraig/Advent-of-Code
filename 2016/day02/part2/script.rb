INPUT = [
  "  1  ",
  " 234 ",
  "56789",
  " ABC ",
  "  D  "]
result = []

File.readlines("input").each do |line|
  i = 2
  j = 0

  line.split("").each do |c|
    case c
    when "U" then i -= 1 if i > 0 && INPUT[i - 1][j] != " "
    when "D" then i += 1 if i < 4 && INPUT[i + 1][j] != " "
    when "L" then j -= 1 if j > 0 && INPUT[i][j - 1] != " "
    when "R" then j += 1 if j < 4 && INPUT[i][j + 1] != " "
    end
  end

  result.push(INPUT[i][j])
end

puts result.join("")
