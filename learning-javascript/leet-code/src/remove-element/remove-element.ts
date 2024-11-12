export function removeElement(nums: number[], val: number): number {
	let i = 0;
	while(i<nums.length) {
		// check if element is the val
		if (nums[i] === val) {
			nums.splice(i,1);
			continue;
		}
		i++;
		// if it is remove it then push an underscore. increment count
	}
	return nums.length;
}