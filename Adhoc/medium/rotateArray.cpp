#include "iostream"
#include <vector>
class Solution {
public:
  void rotate(std::vector<int> &nums, int k) {
    int n = nums.size();
    k = k % n;
    if (k == 0 || n == 1)
      return;
    int arr[k];
    for (int i = n - 1, j = k - 1; j >= 0; j--, i--) {
      arr[j] = nums[i];
    }
    int a = n - 1;
    int b = (n - 1) - k;
    while (b >= 0 && a >= 0) {
      nums[a] = nums[b];
      a--, b--;
    }
    for (int j = 0; j < k; j++) {
      nums[j] = arr[j];
    }
  }
};

int main() {
  Solution *s = new Solution();
  std::vector<int> nums = {1, 2, 3, 4, 5};
  int k = 3;
  s->rotate(nums, k);
  for (int x : nums) {
    std::cout << x << " ";
  }
  std::cout << std::endl;
}
