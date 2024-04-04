var findMin = function (nums) {
  let ans = 0;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (nums[mid] < nums[0]) {
      end = mid - 1;
    } else if (nums[mid] < nums[mid + 1]) start = mid + 1;
    else {
      ans = mid;
      break;
    }
  }
  if (ans === nums.length - 1) return nums[0];
  return nums[ans + 1];
};

console.log(findMin([3, 4, 5, 1, 2]));
