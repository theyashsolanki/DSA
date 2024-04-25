#include "iostream"

using namespace std;

class Solution {
public:
  string reorganizeString(string s) {
    int hash[26] = {0};
    for (char c : s) {
      hash[c - 'a']++;
    }

    char max_freq_char = 0;
    int max_freq = 1;

    for (int i = 0; i < 26; i++) {
      if (hash[i] >= max_freq) {
        max_freq_char = i + 'a';
        max_freq = hash[i];
      }
    }

    int start = 0;
    while (max_freq && start < s.size()) {
      s[start] = max_freq_char;
      max_freq--;
      start += 2;
    }
    hash[max_freq_char - 'a'] = 0;

    if (max_freq > 0)
      return "";
    for (int i = 0; i < 26; i++) {
      while (hash[i] > 0) {
        start = start >= s.size() ? 1 : start;
        s[start] = i + 'a';
        hash[i]--;
        start += 2;
      }
    }
    return s;
  }
};

int main() {
  Solution s = Solution();
  cout << s.reorganizeString("zhmyo") << endl;
}
