passwords = [f'{i}{j}{k}{l}{m}{n}' for i in range(1, 10)
                                   for j in range(i, 10)
                                   for k in range(j, 10)
                                   for l in range(k, 10)
                                   for m in range(l, 10)
                                   for n in range(m, 10)]

print(len([p for p in passwords if p >= '357253' and p <= '892942' and len(set(p)) < len(p)]))
