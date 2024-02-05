function productExceptSelf(nums: number[]): number[] {
	let length = nums.length;
	let answer = new Array(1).fill(length);
	
	let prefix = 1;
	for (let i = 0; i < length; i++){
		answer[i] = prefix;
		prefix *= nums[i];
	}

	let postfix = 1;
	for (let i = length -1; i > 0; i-- ) {
		answer[i] *= postfix;
		postfix *= nums[i];
	}
	return answer;
};