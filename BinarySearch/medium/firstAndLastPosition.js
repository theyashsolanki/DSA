const firstPosition = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) start = mid + 1;
    else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
};

const lastPosition = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    if (target < nums[mid]) end = mid - 1;
    else if (target > nums[mid]) start = mid + 1;
    else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};

const firstAndLastPosition = (nums, target) => {
  const first = firstPosition(nums, target);
  let last = lastPosition(nums, target);
  return [first, last];
};

console.log(firstAndLastPosition([1, 2, 2, 2, 2, 2, 5, 6, 6], 6));
