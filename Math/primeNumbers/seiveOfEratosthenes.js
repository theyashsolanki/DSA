const createSeive = (n) => {
  const seive = new Array(n + 1).fill(true);
  seive[0] = false;
  seive[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (seive[i]) {
      for (let j = i * i; j <= n; j += i) {
        seive[j] = false;
      }
    }
  }
  console.log(seive);
};

createSeive(20);
