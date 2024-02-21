// link - [ https://leetcode.com/problems/reverse-words-in-a-string/ ]
const main = (s: string): string => {
  let ans = "";
  let i = s.length - 1;
  let j = i;
  while (j >= 0) {
    if (s[i] === " ") {
      i--;
    } else {
      j = i;
      while (s[j - 1] !== " " && j > 0) {
        j--;
      }
      ans += s.slice(j, i + 1) + " ";
      i = j - 1;
    }
  }
  return ans.trim();
};

let s = "the sky is blue";
console.log(main(s));
console.log(s);
