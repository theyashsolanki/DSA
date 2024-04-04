const isValid = (piles, h, k) => {
  let hours = 0;
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / k);
  }
  if (hours <= h) return true;
  return false;
};
var minEatingSpeed = function (piles, h) {
  let start = 1;
  let end = Math.max(...piles);
  let ans = 0;
  while (start <= end) {
    const k = start + Math.trunc((end - start) / 2);
    if (isValid(piles, h, k)) {
      ans = k;
      end = k - 1;
    } else start = k + 1;
  }
  return ans;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
