def productExceptSelf(self, nums):
	length = len(nums)
	answer = [1] * length
	
	prefix = 1
	for i in range(length):
		answer[i] = prefix
		prefix *= nums[i]
	postfix = 1
	for i in range(len(nums) -1, -1, -1):
		answer[i] *= postfix
		postfix *= nums[i]
	return answer