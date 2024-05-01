#include <climits>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int crossSum(const vector<int> &nums, int start, int mid, int end) {
    int sum = 0;

    // right side
    int rightSum = INT_MIN;
    for (int i = mid + 1; i <= end; i++) {
      sum += nums[i];
      if (sum > rightSum)
        rightSum = sum;
    }

    sum = 0;

    // left side
    int leftSum = INT_MIN;
    for (int i = mid; i >= start; i--) {
      sum += nums[i];
      if (sum > leftSum)
        leftSum = sum;
    }

    return leftSum + rightSum;
  }
  int solve(const vector<int> &nums, int start, int end) {
    if (start == end)
      return nums[start];

    int mid = start + (end - start) / 2;

    int leftSum = solve(nums, start, mid);
    int rightSum = solve(nums, mid + 1, end);
    int crossBorderSum = crossSum(nums, start, mid, end);

    return max(leftSum, max(rightSum, crossBorderSum));
  }
  int maxSubArray(vector<int> &nums) {
    int ans = solve(nums, 0, nums.size() - 1);
    return ans;
  }
};

int main() {
  Solution s = Solution();
  vector<int> nums = {5, 4, -1, 7, 8};
  cout << s.maxSubArray(nums) << endl;
}
