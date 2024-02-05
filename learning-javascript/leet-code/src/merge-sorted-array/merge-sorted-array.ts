/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

export function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number) {
	// Since we know nums1 is filled with zeroes to account for space. It makes more sense to
	// fill the array from the end;
	let mergePointer = m + n -1;
	let num1Pointer = m - 1;
	let num2Pointer = n - 1;

	while(num1Pointer >=0 && num2Pointer >= 0) {
		// compare current element of nums1 with an current element of the nums2
		 if(nums2[num2Pointer] > nums1[num1Pointer]) {
			nums1[mergePointer--] = nums2[num2Pointer--];
		} else {
			nums1[mergePointer--] = nums1[num1Pointer--];
		}
	}

	while(num2Pointer>=0) {
		nums1[mergePointer--] = nums2[num2Pointer--];	
	}
}
