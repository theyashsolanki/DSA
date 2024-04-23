#include "iostream"
#include "vector"
#include <map>

using namespace std;

class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs) {
    map<vector<int>, vector<string>> group;

    for (int i = 0; i < strs.size(); i++) {
      vector<int> hashmap(256, 0);
      for (char c : strs[i]) {
        if (!hashmap[c])
          hashmap[c] = 1;
        else
          hashmap[c]++;
      }
      group[hashmap].push_back(strs[i]);
    }
    vector<vector<string>> ans;
    for (const auto &g : group) {
      ans.push_back(g.second);
    }
    return ans;
  }
};

int main() {
  Solution s = Solution();
  vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
  vector<vector<string>> ans = s.groupAnagrams(strs);

  for (auto arr : ans) {
    for (auto str : arr) {
      cout << str << " ";
    }
    cout << endl;
  }
}
