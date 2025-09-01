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