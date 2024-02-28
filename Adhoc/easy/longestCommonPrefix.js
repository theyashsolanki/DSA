// link - [ https://leetcode.com/problems/longest-common-prefix/ ]
var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    let found = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        found = false;
        break;
      }
    }
    if (found) ans += char;
    else break;
  }

  return ans;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
