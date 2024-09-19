class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const numFrq = new Map()

    nums.forEach(num => {
      (!numFrq.has(num)) ? numFrq.set(num, 1) : numFrq.set(num, (numFrq.get(num) + 1))
    })

    const arraySorted = [...numFrq.entries()].sort((a, b) => {
      return b[1] - a[1]
    })

    return arraySorted.slice(0, k).map(([num]) => num)
  }
}

const nums = [1,2,2,3,3,3,4,4,4,4]
const k = 2

const solution = new Solution()

solution.topKFrequent(nums, k)
/*
* input: nums = [1,2,2,3,3,3], k = 2Output: [2,3]
*
*/