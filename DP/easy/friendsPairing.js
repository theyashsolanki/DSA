let table;
const mod = 1000000007;
const numberOfWays = (n) => {
  if (n === 1 || n === 2) return n;

  if (table[n] !== -1) return table[n];
  let single = numberOfWays(n - 1);
  let paired = numberOfWays(n - 2) * (n - 1);
  table[n] = ((single % mod) + (paired % mod)) % mod;
  return table[n];
};

const main = (n) => {
  table = new Array(n + 1).fill(-1);
  return numberOfWays(n);
};

console.log(main(1000));
