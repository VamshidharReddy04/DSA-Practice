function twoSum(nums,target){
    let seen={};
    for (let i = 0; i<nums.length;i++){
        let result=target-nums[i];
        if(result in seen){
            return [seen[result],i];
        }
        seen[nums[i]]=i
    }
}
console.log(twoSum([2,7,11,15],9))
// time complexity O(n)
// space complexity O(n)

// what if the array is sorted

function twoSumSorted(nums,target){
    let left =0 ,right=nums.length-1;
    while(left<right){
        let s=nums[left]+nums[right];
        if(s === target){            // In python == is used to check equality but 
                                     //in javascript ==(loose equality) is used compares values after type Conversionso 
                                    // we have to use ===(strictly equal) compares both value and type
            return[left,right];
        }else if(s<target){
            left++;
        }else{
            right--;
        }
    }return[]
}
console.log(twoSumSorted([2,7,11,15],9))

// time complexity O(n)
// space complexity O(1)

