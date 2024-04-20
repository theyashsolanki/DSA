#include <iostream>

using namespace std;
class Solution {
public:
  long long isValidPartition(int arr[], int n, int &k, int mid) {
    int painters = 1;
    long long time = 0;
    for (int i = 0; i < n; i++) {
      if (arr[i] + time > mid) {
        painters++;
        time = 0;
      }
      time += arr[i];
    }
    if (painters <= k)
      return true;
    return false;
  }
  long long minTime(int arr[], int n, int k) {
    if (k > n)
      return -1;
    long long sum = 0;
    long long max = -1;
    for (int i = 0; i < n; i++) {
      sum += arr[i];
      if (max < arr[i])
        max = arr[i];
    }
    long long ans = -1;
    long long &start = max;
    long long &end = sum;
    while (start <= end) {
      long long mid = start + (end - start) / 2;
      if (isValidPartition(arr, n, k, mid)) {
        ans = mid;
        end = mid - 1;
      } else
        start = mid + 1;
    }

    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  int arr[] = {10, 20, 30, 40};
  int n = sizeof(arr) / sizeof(arr[0]);
  int k = 2;
  cout << s->minTime(arr, n, k) << endl;
}
