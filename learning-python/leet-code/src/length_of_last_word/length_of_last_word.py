# function lengthOfLastWord(s: string): number {
# 	const words = s.trim().split(' ');
# 	return words[words.length - 1].length;
# };

def lengthOfLastWord(s:str):
	words = s.rstrip().split(' ')
	lastWordIndex = len(words) - 1
	return len(words[lastWordIndex])