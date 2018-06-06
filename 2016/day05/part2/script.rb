require "digest"

INPUT = "cxdnnyjw"
password = Array.new(8)
i = 0

while password.any? { |x| x.nil? }
  md5 = Digest::MD5.hexdigest(INPUT + i.to_s)
  j = md5[5].to_i
  password[j] = md5[6] if md5.match?(/\A00000[0-7]/) && password[j].nil?
  i += 1
end

puts password.join
