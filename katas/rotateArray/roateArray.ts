export function rotate(nums: number[], k: number) {
	for(let i = 0; i < k; i++ ) {
		let temp = nums.pop();
		nums.unshift(temp);
	}
}
