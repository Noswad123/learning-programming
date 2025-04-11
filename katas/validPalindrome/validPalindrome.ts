export function isPalindrome(s: string): boolean {
	const sArray = s.toLowerCase().split(/[\W_]/);
	const sArrayReverse = [...sArray].join('').split(/(?=\w)/).reverse();
	return sArray.join('') === sArrayReverse.join('');
}