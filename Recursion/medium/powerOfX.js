const power = (n, p) => {
  if (p === 1) return n;

  if (p % 2 === 0) {
    p /= 2;
    const x = power(n, p);
    return x * x;
  }
  p--;
  p /= 2;
  const x = power(n, p);
  return x * x * n;
};
var myPow = function (x, n) {
  if (n < 0) return 1 / power(x, n * -1);
  return power(x, n);
};
console.log(myPow(2, 10));
