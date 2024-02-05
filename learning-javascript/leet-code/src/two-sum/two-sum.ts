/**
 * O(n^2)
 */
export const twoSum = function(nums: number[], target: number) {
	let correctSums = [];
	nums.forEach((num, index) => {
			nums.forEach((eachNum, secondIndex) => {
					if ((index !== secondIndex) && (num + eachNum === target)) {
							if(!correctSums.includes(index)) {
									correctSums.push(index, secondIndex)
							}
					}
			})
	})
	return correctSums
};

/**
 * O(n)
 */
export const twoSumHash = function(numbers: number[], target: number) {
	const visitedIndex = {};
	for(let i = 0; i < numbers.length; i++) {
		const remainder = (target - numbers[i]).toString();
		if (Object.keys(visitedIndex).includes(remainder)) {
			return [visitedIndex[remainder], i];
		}
		visitedIndex[numbers[i].toString()] = i;
	}
};