pos_x = 0
pos_y = 0
dir_vec_x = 0
dir_vec_y = 1
visited = [[pos_x, pos_y]]

File.read("input").split(", ").each do |instruction|
  if instruction[0] == 'R'
    dir_vec_x, dir_vec_y = dir_vec_y, -dir_vec_x
  else
    dir_vec_x, dir_vec_y = -dir_vec_y, dir_vec_x
  end

  dist = instruction[1..-1].to_i

  (dir_vec_x.abs * dist).times do
    pos_x += dir_vec_x
    visited.push([pos_x, pos_y])
  end

  (dir_vec_y.abs * dist).times do
    pos_y += dir_vec_y
    visited.push([pos_x, pos_y])
  end
end

puts visited.select { |x| visited.count(x) >= 2 }.first.map(&:abs).sum
