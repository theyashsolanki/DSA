const solve = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return solve(n - 1) + solve(n - 2);
};

const hash = new Map();
const solveWithHash = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (!hash.has(n)) {
    hash.set(n, solveWithHash(n - 1) + solveWithHash(n - 2));
  }
  return hash.get(n);
};

console.time("time taken");
let f = solveWithHash(50);

console.timeEnd("time taken");
console.log(f);
