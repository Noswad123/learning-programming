def romanToInt(s):
	roman = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
		'IV': 4,
		'IX': 9,
		'XL': 40,
		'XC': 90,
		'CD': 400,
		'CM': 900,
	}
	res = 0
	for i in range(len(s)):
		if i + 1 < len(s) and roman[s[i]] < roman[s[i+1]]:
			res -= roman[s[i]]
		else:
			res += roman[s[i]]

	return res