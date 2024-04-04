const isValid = (mid, weights, days) => {
  let weighhtPD = mid;
  let countDays = 1; // first day
  for (let i = 0; i < weights.length; i++) {
    if (weighhtPD - weights[i] >= 0) {
      weighhtPD -= weights[i];
    } else if (countDays < days) { // weightsPD - weights[i] < 0
      countDays++; // next day started
      weighhtPD = mid - weights[i];
    } else return false;
  }
  return true;
};
var shipWithinDays = function (weights, days) {
  let ans = 0;
  let start = -1;
  let end = 0;
  for (let i = 0; i < weights.length; i++) {
    end += weights[i];
    if (weights[i] > start) start = weights[i];
  }
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (isValid(mid, weights, days)) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};

console.log(shipWithinDays([1, 2, 3, 1, 1], 4));
