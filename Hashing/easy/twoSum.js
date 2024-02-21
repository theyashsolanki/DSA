// link = [ https://leetcode.com/problems/two-sum/ ]
const twoSum = (nums, target) => {
  const ans = [];
  const frequencyMap = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i];
    if (frequencyMap[x] !== undefined && frequencyMap[x] !== i) {
      ans[0] = i;
      ans[1] = frequencyMap[x];
      break;
    }
  }
  return ans;
};

console.log(twoSum([2, 7, 11, 15], 9));
