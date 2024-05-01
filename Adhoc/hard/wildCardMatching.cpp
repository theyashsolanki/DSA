#include <iostream>

using namespace std;

class Solution {
public:
  bool isMatch(string s, string p) {
    int i = 0;
    int j = 0;
    while (i < s.size()) {
      if (p[j] == '*') {
        while (j < p.size() && p[j] == '*')
          j++;
        if (j >= p.size() - 1)
          return true;
        else {
          while (i < s.size() && s[i] != p[j]) {
            i++;
          }
        }
      } else if (p[j] == '?')
        i++, j++;
      else if (s[i] == p[j]) {
        i++, j++;
      } else
        return false;
    }
    if (j < p.size())
      return false;
    return true;
  }
};

int main() {
  Solution s = Solution();
  cout << s.isMatch("abcabczzzde", "*abc???de*") << endl;
}
