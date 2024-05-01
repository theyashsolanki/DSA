const createSeive = (n) => {
  const seive = new Array(n + 1).fill(1);
  seive[0] = 0;
  seive[1] = 0;

  for (let i = 2; i * i <= n; i++) {
    if (seive[i]) {
      for (let j = i * i; j <= n; j += i) {
        seive[j] = 0;
      }
    }
  }
  return seive;
};

const sqrt = (n) => {
  let start = 0;
  let end = Math.trunc(n / 2);
  let ans = null;
  while (start <= end) {
    const mid = start + Math.trunc((end - start) / 2);
    if (mid * mid === n) return mid;
    else if (mid * mid > n) end = mid - 1;
    else {
      ans = mid;
      start = mid + 1;
    }
  }
  return ans;
};

const segSeive = (start, end) => {
  const baseSeive = createSeive(sqrt(end));
  const rangeSeive = new Array(end - start + 1).fill(1);
  if (start === 0) {
    rangeSeive[0] = 0;
    rangeSeive[1] = 0;
  }
  if (start === 1) rangeSeive[0] = 0;

  for (let i = 2; i < baseSeive.length; i++) {
    if (baseSeive[i]) {
      let firstMultiple = Math.trunc(start / i) * i; // we can use the ceil(start / i) * i to skip the next if condition
      if (firstMultiple < start) {
        firstMultiple += i;
      }
      let j = Math.max(firstMultiple, i * i);
      while (j <= end) {
        rangeSeive[j - start] = 0;
        j += i;
      }
    }
  }
  for (let i = 0; i < rangeSeive.length; i++) {
    if (rangeSeive[i]) console.log(i + start);
  }
};
segSeive(2, 12);
