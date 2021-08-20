/*longest substring w/out repeating characters
given a string s, find the length of the longest substring without repeating characters

example 1: 
s = 'abcabcbb'
output = 3
the answer is 'abc' with the length of 3

s = 'bbbbbb'
output = 1
the answer is 'b' with the length of 1

s = 'pwwkew'
output = 3
the answer is 'wke' with the length of 3
notice that the answer must be a substring, 'pwke' is a subsequence and not a substring

*/

let lengthOfLongestSubstring = (s) => {
  if (s.length <= 0) return 0;

  let left = 0;
  let right = 0;
  let maxLength = -Infinity;
  const seenSet = new Set();

  while (right < s.length) {
    //if s[right] has not been seen yet
    if (!seenSet.has(s[right])) {
      //add it to the set
      seenSet.add(s[right]);
      //increase the size of the window to the right
      right++;
      //update maxLength - set size represents length of UNIQUE substring
      maxLength = Math.max(maxLength, seenSet.size);
    } else {
      //we've seen s[right] character so we need to shrink the window
      seenSet.delete(s[left]);
      //shrink window from left
      left++;
      console.log(s[left]);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
