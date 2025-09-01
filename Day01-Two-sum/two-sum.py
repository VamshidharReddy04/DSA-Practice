def twoSums(nums, target):
    seen= {}
    for i , num in enumerate(nums):
        result = target - num
        if result in seen:
            return [seen[result], i]
        seen[num] = i
print(twoSums([2, 7, 11, 15], 9))