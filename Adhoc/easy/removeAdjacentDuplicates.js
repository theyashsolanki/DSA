// link - [ https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/ ]
const removeDuplicates = function (s) {
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    if (ans[ans.length - 1] === s[i]) {
      ans.pop();
    } else {
      ans.push(s[i]);
    }
  }
  return ans.join("");
};

console.log(removeDuplicates("abbaca"));
