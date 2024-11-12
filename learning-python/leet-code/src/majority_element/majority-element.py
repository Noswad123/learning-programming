def majorityElement(nums):
	numberHash = {}
	for number in nums:
		if numberHash[number] == None:
			numberHash[number] = 1
		else: 
			numberHash[number] += 1
	greatest = {'key': 0, 'appearances': 0}
	for k,v in numberHash:	
		if v > greatest.appearances:
			greatest = {
				'key': k,
				'appearances': numberHash[k]
			}
	return greatest.key

# boyer-moore Majority Vote Algorithm
def boyersAlgorithm(nums):
	# assume the first element is the answer
	ans = nums[0]
	count = 1

	for num in nums:
		if ans != num:
			count-=1 # if meet different value,count--
		else: # if meet the same value, count++ 
			count+=1
		# if the current best ans is no longer the majority
		# i.e. it's count is not larger than i / 2
		if count == 0:
			count = 1
			ans = num
	return ans
