// link - [ https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ ]

const strStr = function (haystack, needle) {
  let start = 0;
  let end = needle.length - 1;
  while (end < haystack.length) {
    let part = haystack.substring(start, end + 1);
    if (part === needle) return start;
    start++;
    end++;
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
