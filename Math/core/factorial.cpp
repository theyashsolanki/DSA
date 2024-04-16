#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  void reverseArray(vector<int> &arr) {
    int start = 0;
    int end = arr.size() - 1;
    while (start <= end) {
      int temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++, end--;
    }
  }
  vector<int> factorial(int N) {
    vector<int> ans;
    ans.push_back(1);

    for (int i = 2; i <= N; i++) {
      int carry = 0;
      for (int j = 0; j < ans.size(); j++) {
        int x = ans[j] * i + carry;
        ans[j] = x % 10;
        carry = x / 10;
      }
      while (carry) {
        ans.push_back(carry % 10);
        carry /= 10;
      }
    }

    reverseArray(ans);

    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  for (int x : s->factorial(1000)) {
    cout << x;
  }
  cout << "\n";
}
