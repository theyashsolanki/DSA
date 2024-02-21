// link - [ https://leetcode.com/problems/remove-duplicates-from-sorted-array/ ]
const removeDuplicates = (nums) => {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] === nums[i]) {
      j++;
    } else {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return i + 1;
};
