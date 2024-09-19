  function largestNumber(nums: number[]): string {
    nums.sort((a, b) => {
      const [aStr, bStr] = [String(a), String(b)]
      const [aFirst, bFirst] = [aStr.concat(bStr), bStr.concat(aStr)]
      return (aFirst > bFirst) ? -1 : 1
    })

    if (nums[0] === 0) {
      return '0';
    }
  
    return nums.join('');
  };