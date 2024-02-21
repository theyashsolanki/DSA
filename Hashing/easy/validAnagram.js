// link - [ https://leetcode.com/problems/valid-anagram/ ]
const main = (s, t) => {
  if (s.length !== t.length) return false;
  const sCount = {};
  for (const ch of s) {
    if (!sCount[ch]) sCount[ch] = 1;
    else sCount[ch]++;
  }
  for (const ch of t) {
    if (!sCount[ch]) return false;
    sCount[ch]--;
  }
  for (const ch of s) {
    if (sCount[ch] > 0 || sCount[ch] < 0) return false;
  }
  return true;
};

console.log(main("ab", "ab"));
