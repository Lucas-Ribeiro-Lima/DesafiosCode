class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
      for(let i = 1; i < nums.length; i++){
        for(let j = i - 1; j < nums.length - 1; j++){
          if(nums[i] === nums[j]) continue
          if(nums[i] + nums[j] === target) return [i, j]
        }
      }
  }
}
