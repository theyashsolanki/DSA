// link - [ https://leetcode.com/problems/maximum-average-subarray-i/ ]
const findMaxAverage = (nums, k) => {
  let start = 0;
  let end = k - 1;
  let maxAverage = 0;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += nums[i];
  }
  maxAverage = sum / k;
  while (end < nums.length) {
    sum -= nums[start];
    start++;
    end++;
    sum += nums[end];
    const avg = sum / k;
    if (avg > maxAverage) maxAverage = avg;
  }

  return maxAverage;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
