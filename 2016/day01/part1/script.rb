pos_x = 0
pos_y = 0
dir_vec_x = 0
dir_vec_y = 1

File.read("input").split(", ").each do |instruction|
  if instruction[0] == 'R'
    dir_vec_x, dir_vec_y = dir_vec_y, -dir_vec_x
  else
    dir_vec_x, dir_vec_y = -dir_vec_y, dir_vec_x
  end

  dist = instruction[1..-1].to_i
  pos_x += dir_vec_x * dist
  pos_y += dir_vec_y * dist
end

puts pos_x.abs + pos_y.abs
