// link - [ https://leetcode.com/problems/4sum/ ]
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const ans = [];
  let c = 0;
  while (c < nums.length) {
    let d = c + 1;
    while (d < nums.length) {
      let a = d + 1;
      let b = nums.length;
      let tempTarget = target - nums[c] - nums[d];
      while (a < b) {
        const sum = nums[a] + nums[b];
        if (sum === tempTarget) {
          ans.push([nums[c], nums[d], nums[a], nums[b]]);
          a++;
          while (nums[a] === nums[a - 1]) a++;
        } else if (sum < tempTarget) {
          a++;
        } else {
          b--;
        }
      }
      d++;
      while (nums[d] === nums[d - 1]) d++;
    }
    c++;
    while (nums[c] === nums[c - 1]) c++;
  }
  return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
