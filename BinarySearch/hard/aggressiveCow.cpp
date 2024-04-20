#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  bool putCows(int n, int k, vector<int> &stalls, int mid) {
    int lastCow = stalls[0];
    k--;
    for (int i = 1; i < n; i++) {
      int diff = stalls[i] - lastCow;
      if (diff >= mid) {
        k--;
        lastCow = stalls[i];
      }
    }
    if (k <= 0)
      return true;
    return false;
  }
  int solve(int n, int k, vector<int> &stalls) {
    sort(stalls.begin(), stalls.end());
    int ans = -1;
    int start = 0;
    int end = stalls[stalls.size() - 1] - stalls[0];

    while (start <= end) {
      int mid = start + (end - start) / 2;
      if (putCows(n, k, stalls, mid)) {
        ans = mid;
        start = mid + 1;
      } else
        end = mid - 1;
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<int> stalls = {10, 1, 2, 7, 5};
  int n = stalls.size();
  int k = 3;
  cout << s->solve(n, k, stalls) << endl;
}
