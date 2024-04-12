#include "iostream"
#include <vector>
class Solution {
public:
  void swap(int a, int b, std::vector<int> &nums) {
    int temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  void reverse(int start, int end, std::vector<int> &nums) {
    while (start <= end) {
      swap(start, end, nums);
      start++, end--;
    }
  }

  void rotate(std::vector<int> &nums, int k) {
    int n = nums.size();
    k = k % n;

    reverse(0, n - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, n - 1, nums);
  }
};

int main() {
  Solution *s = new Solution();
  std::vector<int> nums = {1, 2, 3, 4, 5};
  int k = 2;
  s->rotate(nums, k);
  for (int x : nums) {
    std::cout << x << " ";
  }
  std::cout << std::endl;
}
