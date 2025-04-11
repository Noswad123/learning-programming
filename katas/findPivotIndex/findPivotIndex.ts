function pivotIndex(nums: number[]): number {
	let pivot = 0;
	for(let i = 0; i < nums.length; i++) {
			let leftSum = 0;
			let rightSum = 0;
			
			const leftSet = nums.slice(0, i);
			const rightSet = nums.slice(i+1, nums.length)
			if(leftSet.length > 0) {
					leftSum = leftSet.reduce((prev, cur) => prev + cur);
			} 
			if(rightSet.length > 0) {
					rightSum = rightSet.reduce((prev, cur) => prev + cur);
			}
			
			if(leftSum === rightSum) {
					pivot = i;
					break;
			} else if(i === nums.length -1) {
					pivot = -1;
			}
	}
	return pivot;
};

console.log(pivotIndex([1,7,3,6,5,6]));
