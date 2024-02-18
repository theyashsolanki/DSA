// link - [ https://leetcode.com/problems/3sum/ ]

const threeSumUsingSet = function (nums) {
  let i = 0;
  nums.sort((a, b) => a - b);
  const ans = new Set();
  while (i < nums.length) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        ans.add(`${nums[i]} ${nums[j]} ${nums[k]}`);
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
    i++;
  }
  return [...ans].map((x) => x.split(" "));
};

const threeSumWithoutSet = function (nums) {
  nums.sort((a, b) => a - b);
  let index = 0;
  const ans = [];
  while (index < nums.length) {
    let target = -nums[index];
    let a = index + 1;
    let b = nums.length - 1;
    while (a < b) {
      let sum = nums[a] + nums[b];
      if (sum === target) {
        ans.push([nums[index], nums[a], nums[b]]);
        a++;
        while (nums[a] === nums[a - 1]) a++;
      } else if (sum > target) {
        b--;
      } else {
        a++;
      }
    }
    index++;
    while (target === -nums[index]) index++;
  }
  console.log(ans);
};
threeSumWithoutSet([0, 0, 0, 0]);
