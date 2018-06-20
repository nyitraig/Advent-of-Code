def letters_by_frequency(str)
  str.delete("-").chars.group_by(&:dup).sort
    .sort { |(_, k1), (_, k2)| k2.size <=> k1.size }.to_h.keys.join
end

def shift_by(str, n)
  str.split("-").map do |word|
    word.chars.map { |c| [*'a'..'z'][([*'a'..'z'].index(c) + n) % 26] }.join
  end.join(" ")
end

puts File.readlines("input").map { |x| x.match(/(.*)-(.*)\[(.*)\]/).captures }
  .select { |name, _, checksum| letters_by_frequency(name).start_with?(checksum) }
  .select { |name, id, _| shift_by(name, id.to_i).include?("north") }
  .map { |name, id, _| shift_by(name, id.to_i) + " " + id }
