var arrangeCoins = function (n) {
  let start = 1;
  let end = n;
  let ans = 0;
  while (start <= end) {
    const mid = Math.trunc(start + (end - start) / 2);
    const target = (mid * (mid + 1)) / 2;
    if (n - target < 0) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};

console.log(arrangeCoins(8));
