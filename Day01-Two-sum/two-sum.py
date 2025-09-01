def twoSums(nums, target):
    seen= {}
    for i , num in enumerate(nums):
        result = target - num
        if result in seen:
            return [seen[result], i]
        seen[num] = i
print(twoSums([2, 7, 11, 15], 9))

# time complexity: O(n)
# space complexity: O(n)

# what if the array is sorted
def twoSumSorted(nums,target):
    left ,right = 0 , len(nums)-1
    while left < right:
        s=nums[left]+nums[right]
        if s==target:       #In python == is used to check equality but 
                            #in javascript == is used compares values after type Conversionso we have to use ===(strictly equal) compares both value and type
            return[left,right]
        else:
            if s<target:
                left+=1
            else:
                right-=1
print(twoSumSorted([2,7,11,15],9))