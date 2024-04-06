const isValidSubarray = (mid, nums, k, t) => {
  let sum = 0;
  let countK = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + sum * t > mid) {
      countK++;
      sum = 0;
    }
    sum += nums[i] * t;
  }
  return countK <= k;
};

var splitArray = function (nums, k, t) {
  let totalSum = 0;
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    if (nums[i] > max) max = nums[i];
  }
  let ans = totalSum;
  let start = max * t;
  let end = totalSum * t;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (isValidSubarray(mid, nums, k, t)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};

console.log(splitArray([1, 10], 2, 5));
