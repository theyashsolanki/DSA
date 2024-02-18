// link - [ https://leetcode.com/problems/two-sum/ ]
var twoSum = function (nums, target) {
  const temp = [...nums];
  temp.sort((a, b) => a - b);
  const tempAns = [];
  let start = 0;
  let end = temp.length - 1;
  while (start < temp.length) {
    const sum = temp[start] + temp[end];
    if (sum === target) {
      tempAns[0] = temp[start];
      tempAns[1] = temp[end];
      break;
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (tempAns[0] === nums[i]) {
      ans[0] = i;
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (tempAns[1] === nums[i] && i !== ans[0]) {
      ans[1] = i;
      break;
    }
  }

  return ans;
};

console.log(twoSum([3, 2, 4], 6));
