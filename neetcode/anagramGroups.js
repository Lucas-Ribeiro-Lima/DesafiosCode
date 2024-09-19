class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = {};  // Object to store anagram groups

    // Iterate through each string
    strs.forEach(str => {
      // Sort the characters in the string to create a key
      const sortedStr = str.split('').sort().join('');
      
      // If this sorted string is not in the map, add it as a key with an empty array
      if (!map[sortedStr]) {
        map[sortedStr] = [];
      }
      
      // Push the original string to the corresponding group in the map
      map[sortedStr].push(str);
    });

    // Return the grouped anagrams as an array of arrays
    return Object.values(map);
  }
}
