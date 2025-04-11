export function canJump(nums: number[]): boolean {
  let goal = nums.length - 1;
  for (let i = goal - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }
  return goal === 0;
}

export function canJump2(nums: number[]): number {
	let jumps = 0;
	let l, r = 0;

	while (r < nums.length - 1) {
		let farthest = 0;
		for (let i = 0; i < r+1; i++) {
			farthest = Math.max(farthest, i + nums[i])
		}
		l = r + 1;
		r = farthest;
		jumps++ 
	}
	return jumps;
}
