var peakIndexInMountainArray = function (arr) {
  let ans = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (arr[mid] <= arr[mid + 1]) {
      start = mid + 1;
    } else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
