export function majorityElement(nums: number[]): number {
	const numberHash = {};
	nums.forEach((number) => {
		if (numberHash[number.toString()] === undefined) {
			numberHash[number.toString()] = 1;
		} else {
			numberHash[number.toString()]++;
		}
	});
	let greatest = {key: 0, appearances: 0};
	let keys = Object.keys(numberHash);
	keys.forEach((key) => {
		if(numberHash[key] > greatest.appearances) {
			greatest = {
				key: parseInt(key),
				appearances: numberHash[key]
			}
		}
	});
	return greatest.key;
}

// boyer-moore Majority Vote Algorithm
export function boyersAlgorithm(nums: number[]) {
	//assume the first element is the answer
	let ans = nums[0], count = 1; 
	
	for (let i = 1; i < nums.length; i++) {    
			if (ans != nums[i]) { 
					count--;//if meet different value,count--
			} else { //if meet the same value, count++ 
					count++;
			} 
			//if the current best ans is no longer the majority
			// i.e. it's count is not larger than i / 2
			if (count == 0) {
					count = 1;
					ans = nums[i];
			}
	}
	return ans;
}