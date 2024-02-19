// link - [ https://leetcode.com/problems/valid-anagram/ ]
const main = (s, t) => {
  if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};
  for (const ch of s) {
    if (!sCount[ch]) sCount[ch] = 1;
    else sCount[ch]++;
  }
  for (const ch of t) {
    if (!tCount[ch]) tCount[ch] = 1;
    else tCount[ch]++;
  }
  for (const ch of s) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};

console.log(main("a", "ab"));
