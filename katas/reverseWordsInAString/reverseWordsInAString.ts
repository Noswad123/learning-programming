function reverseWords(s: string): string {
	const reversed = s.split(' ').reverse().filter((word) => !!word);
	return reversed.join(' ')
};
