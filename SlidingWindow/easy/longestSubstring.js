// link - [ https://leetcode.com/problems/longest-substring-without-repeating-characters/ ]

const lengthOfLongestSubstring = (s) => {
  const table = new Map();
  let ans = 0;
  let i = 0;
  let j = 0;
  let count = 0;
  while (j < s.length) {
    if (table.has(s[j])) {
      if (count > ans) ans = count;
      count--;
      table.delete(s[i]);
      i++;
    } else {
      table.set(s[j], 1);
      j++;
      count++;
    }
  }
  if (count > ans) return count;
  return ans;
};

console.log(lengthOfLongestSubstring("au"));
