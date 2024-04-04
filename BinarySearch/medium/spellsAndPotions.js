const bs = (spell, potions, success) => {
  let start = 0;
  let end = potions.length - 1;
  let ans = -1;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (potions[mid] * spell >= success) {
      ans = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return ans;
};
var successfulPairs = function (spells, potions = [], success) {
  potions.sort((a, b) => a - b);
  const ans = new Array(spells.length).fill(0);
  for (let i = 0; i < spells.length; i++) {
    let firstSuccess = bs(spells[i], potions, success);
    if (firstSuccess !== -1) {
      ans[i] = potions.length - firstSuccess;
    }
  }
  return ans;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
