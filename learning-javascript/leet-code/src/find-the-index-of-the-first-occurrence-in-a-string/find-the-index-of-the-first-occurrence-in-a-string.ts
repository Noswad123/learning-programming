export function strStr(haystack: string, needle: string) {
	if (needle === "") return 0;
	for (let i = 0; i < haystack.length + 1 - needle.length; i++){
		if(haystack.slice(i, i + needle.length) === needle) {
			return i;
		}
	}
	return -1;
}