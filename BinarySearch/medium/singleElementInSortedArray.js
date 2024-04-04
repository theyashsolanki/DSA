var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) start = mid + 2;
      else end = mid;
    } else {
      if (nums[mid] === nums[mid - 1]) start = mid + 1;
      else end = mid;
    }
  }
  return nums[start];
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 8]));
