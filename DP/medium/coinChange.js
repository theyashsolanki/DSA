const solve = (arr, amount) => {
  if (amount === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < amount) {
      coin = solve(arr, amount - arr[i]) + 1;
      return coin;
    }
  }
};

console.log(solve([1, 2, 5], 11));
