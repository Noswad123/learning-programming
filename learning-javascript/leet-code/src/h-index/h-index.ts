export function hIndex(citations: number[]) {
	const size = citations.length;
	citations.sort((a,b) => a -b);
	for (let i = 0; i < citations.length; i++) {
		if(size - i <= citations[i]) {
			return size-i;
		}
	}
	return 0;
}

// [10,8,6,6,4,4,3,3]
// //0 1 2 3 4 5 6 7
//  [3,3,4,4,6,6,8,10]