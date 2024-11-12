/**
 * time complexity: O(n)
 * @param nums 
 * @returns 
 */

export function removeDuplicates(nums: number[]): number {
	let i = 1;
	let prevValue = nums[0];
	while(i < nums.length) {
		if(nums[i] === prevValue) {
			nums.splice(i, 1);
			continue;
		}
		prevValue = nums[i];
		i++;
	}
	return nums.length;
};

export function removeDuplicates2(nums: number[]): number {
	let i = 1;
	let prevValue = nums[0];
    let dupe = {
        value: null,
        count: 0,
    };
	while(i < nums.length) {
		if(nums[i] === prevValue) {
			if(prevValue === dupe.value){
					dupe.count++;
					if(dupe.count > 2) {
				nums.splice(i, 1);
				continue;
					}
			} else {
					dupe.count = 2;
					dupe.value = prevValue;
			}
		}
		prevValue = nums[i];
		i++;
	}
	return nums.length;
};