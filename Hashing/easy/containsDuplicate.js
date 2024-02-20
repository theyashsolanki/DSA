// link - [ https://leetcode.com/problems/contains-duplicate/ ]
const main = (nums) => {
  const count = {};
  for (const el of nums) {
    if (!count[el]) count[el] = 1;
    else count[el]++;
    if (count[el] > 1) return true;
  }
  return false;
};

console.log(main([0, 2, 3, 1]));
