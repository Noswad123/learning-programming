def canJump(nums):
	goal = len(nums) - 1
	i = goal - 1
	while i >=0:	
		if i + nums[i] >= goal:
			goal = i
		i -= 1
	return goal == 0

def canJump2(nums):
	jumps = 0
	# boundary of our current level
	l = r = 0

	while r < len(nums) -1:
		farthest = 0
		for i in range(l, r+1):
			farthest = max(farthest, i + nums[i])
		l = r + 1
		r = farthest
		jumps +=1
	return jumps