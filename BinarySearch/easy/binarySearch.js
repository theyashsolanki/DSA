const bs = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.trunc(start + ((end - start) >> 1));
    if (target < nums[mid]) end = mid - 1;
    else if (target > nums[mid]) start = mid + 1;
    else return mid;
  }
  return -1;
};

const arr = [5, 6, 7, 8, 9, 10];
console.log(bs(arr, 9));
