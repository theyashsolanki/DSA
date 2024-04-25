#include "iostream"

using namespace std;

class Solution {
public:
  string convert(string s, int numRows) {
    if (numRows == 1)
      return s;
    string ans = "";

    int n = numRows;

    bool topDown = true;

    int i = 0;
    while (n > 0) {
      int j = i;
      if (n == 1 || n == numRows) {
        while (j < s.size()) {
          ans += s[j];
          j += numRows * 2 - 2;
        }
      } else {
        while (j < s.size()) {
          if (topDown) {
            ans += s[j];
            j += n * 2 - 2;
            topDown = false;
          } else {
            ans += s[j];
            j += (numRows - n) * 2;
            topDown = true;
          }
        }
      }
      topDown = true;
      n--;
      i++;
    }
    return ans;
  }
};

int main() {
  Solution s = Solution();
  cout << s.convert("A", 1) << endl;
}
