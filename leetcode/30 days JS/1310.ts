function xorQueries(arr: number[], queries: number[][]): number[] {
  let result: number[] = []
  for(let query in queries) {
    let xor
    for(let i = query[0]; i < query[1]; i++) {
      if(!(xor == null)) xor ^= arr[i + 1]
      else  xor = arr[i] ^ arr[i+1]
    }
    result.push(xor ?? arr[query[0]])
  }
  return result
};

/**
  Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
  Output: [2,7,14,8] 
  Explanation: 
  The binary representation of the elements in the array are:
  1 = 0001 
  3 = 0011 
  4 = 0100 
  8 = 1000 
  The XOR values for queries are:
  [0,1] = 1 xor 3 = 2 
  [1,2] = 3 xor 4 = 7 
  [0,3] = 1 xor 3 xor 4 xor 8 = 14 
  [3,3] = 8
 */
