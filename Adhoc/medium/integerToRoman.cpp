#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  string intToRoman(int num) {
    vector<string> roman = {"M",  "CM", "D",  "CD", "C",  "XC", "L",
                            "XL", "X",  "IX", "V",  "IV", "I"};
    vector<int> range = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    string ans = "";

    for (int i = 0; i < range.size(); i++) {
      while (num >= range[i]) {
        ans += roman[i];
        num -= range[i];
      }
    }
    return ans;
  }
};

int main() {
  Solution s = Solution();
  cout << s.intToRoman(1994) << endl;
}
