def removeDuplicates(nums) :
	i = 1
	prevValue = nums[0]
	while i < len(nums):
		if nums[i] == prevValue:
			nums.remove(prevValue)
			continue
		prevValue = nums[i]
		i += 1
	return len(nums)

def removeDuplicates2(nums):
	i = 1
	prevValue = nums[0]
	dupe = {
			'value': '',
			'count': 0,
	}
	while i < len(nums):
		if nums[i] == prevValue:
				if prevValue == dupe['value']:
						dupe['count']+= 1
						if dupe['count'] > 2:
								nums.remove(prevValue)
								continue
				else:
						dupe['count'] = 2
						dupe['value'] = prevValue
		prevValue = nums[i]
		i+=1
	return len(nums)