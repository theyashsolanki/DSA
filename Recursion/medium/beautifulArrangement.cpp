#include <iostream>
#include <utility>
#include <vector>

using namespace std;

class Solution {
public:
  void solve(vector<int> &nums, int &count, int index = 0) {
    if (index == nums.size()) {
      bool isBeautiful = 1;
      for (int i = 0; i < nums.size(); i++) {
        if (nums[i] % (i + 1) != 0 && (i + 1) % nums[i] != 0) {
          isBeautiful = 0;
          break;
        }
      }
      if (isBeautiful)
        count++;
    }

    for (int i = index; i < nums.size(); i++) {
      swap(nums[i], nums[index]);
      solve(nums, count, index + 1);
      swap(nums[i], nums[index]);
    }
  }
  int countArrangement(int n) {
    int count = 0;
    vector<int> nums;
    for (int i = 1; i <= n; i++) {
      nums.push_back(i);
    }
    solve(nums, count);
    return count;
  }
};

int main() {
  Solution s = Solution();
  cout << s.countArrangement(3) << endl;
}
