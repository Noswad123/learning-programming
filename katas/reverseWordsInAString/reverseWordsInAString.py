import re
def reverseWords(s: str):
	strippedString = re.split('[\s]+', s.strip())
	s.isprintable
	reversedString = ''	
	for word in strippedString.reverse():
		if word != ' ':
			reversedString += word
	return reversedString