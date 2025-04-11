def removeElement(nums, val):
	i = 0
	while i < len(nums):
		# check if element is the val
		if nums[i] == val:
			nums.remove(val)
			continue
		i += 1
		# if it is remove it then push an underscore. increment count
	return len(nums) 