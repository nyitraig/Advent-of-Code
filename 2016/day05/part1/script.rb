require "digest"

INPUT = "cxdnnyjw"
password = []
i = 0

while password.size != 8
  hash = Digest::MD5.hexdigest(INPUT + i.to_s)
  password.push(hash[5]) if hash.start_with?("00000")
  i += 1
end

puts password.join
