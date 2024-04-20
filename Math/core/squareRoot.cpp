#include <cmath>
#include <iostream>

using namespace std;

int sqrt(int n, int p) {
  int start = 0;
  int end = n / 2;
  int ans = -1;
  while (start <= end) {
    int mid = start + (end - start) / 2;
    if (mid * mid == n)
      return mid;
    else if (mid * mid < n) {
      ans = mid;
      start = mid + 1;
    } else
      end = mid - 1;
  }
  return ans;
}

double sqrtWithPrecision(int n, int p) {
  double ans = int(sqrt(n));
  double step = 0.1;
  for (int i = 0; i < p; i++) {
    double j = ans;
    while (j * j <= n) {
      ans = j;
      j += step;
    }
    step /= 10;
  }
  return ans;
}

int main() {
  int n = 51;
  int p = 5;
  printf("%0.4f\n", sqrtWithPrecision(n, p));
}
