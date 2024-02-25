// link - [ https://leetcode.com/problems/first-missing-positive/ ]

const firstMissingPositive = function (nums) {
  let foundOne = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) foundOne = true;
    if (nums[i] <= 0) {
      nums[i] = 1;
    }
  }

  if (!foundOne) return 1;

  for (let i = 0; i < nums.length; i++) {
    let x = Math.abs(nums[i]) - 1;
    if (nums[x] > 0) {
      nums[x] *= -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }

  return nums.length + 1;
};

console.log(firstMissingPositive([1, 2, 0]));
