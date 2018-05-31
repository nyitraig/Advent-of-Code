def letters_by_frequency(str)
  str.delete("-").chars.group_by(&:dup).sort
    .sort { |(_, k1), (_, k2)| k2.size <=> k1.size }.to_h.keys.join
end

puts File.readlines("input").map { |x| x.match(/(.*)-(.*)\[(.*)\]/).captures }
  .select { |name, _, checksum| letters_by_frequency(name).start_with?(checksum) }
  .sum { |_, id, _| id.to_i }
