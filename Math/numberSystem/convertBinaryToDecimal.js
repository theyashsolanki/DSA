const binaryToDecimal = (b) => {
  let x = 1;
  let ans = 0;
  while (b > 0) {
    ans = ans + ((b % 10) * x);
    x *= 2;
    b = Math.trunc(b / 10);
  }
  return ans;
};

console.log(binaryToDecimal(1010));
