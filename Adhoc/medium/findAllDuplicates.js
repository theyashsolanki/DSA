// link - [ https://leetcode.com/problems/find-all-duplicates-in-an-array/ ]
const findDuplicates = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]) - 1;
    if (nums[x] > 0) {
      nums[x] *= -1;
    } else {
      ans.push(Math.abs(nums[i]));
    }
  }
  return ans;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
