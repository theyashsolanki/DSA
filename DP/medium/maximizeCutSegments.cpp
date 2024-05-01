#include <climits>
#include <iostream>

using namespace std;

class Solution {
public:
  int solve(int n, int x, int y, int z) {
    if (n == 0)
      return 0;
    if (n < 0)
      return INT_MIN;

    int xLen = 1 + solve(n - x, x, y, z);
    int yLen = 1 + solve(n - y, x, y, z);
    int zLen = 1 + solve(n - z, x, y, z);

    return max(xLen, max(yLen, zLen));
  }
  int maximizeTheCuts(int n, int x, int y, int z) {
    int ans = solve(n, x, y, z);
    if (ans < 0)
      return 0;
    return ans;
  }
};

int main() {
  Solution s = Solution();
  cout << s.maximizeTheCuts(4, 2, 1, 1) << endl;
}
