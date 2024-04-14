#include <cstdlib>
#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
  vector<int> findMissingAndRepeatedValues(vector<vector<int>> &grid) {
    vector<int> ans(2, -1);
    bool foundDuplicate = 0;
    for (int i = 0; i < grid.size(); i++) {
      for (int j = 0; j < grid[0].size(); j++) {
        int index = abs(grid[i][j]) - 1;
        int col = index % grid[0].size();
        int row = index / grid[0].size();

        if (grid[row][col] < 0) {
          ans[0] = abs(grid[i][j]);
        } else
          grid[row][col] *= -1;
      }
    }
    bool foundMissing = 0;
    for (int i = 0; i < grid.size(); i++) {
      if (foundMissing)
        break;
      for (int j = 0; j < grid[0].size(); j++) {
        if (grid[i][j] > 0) {
          int x = i * grid[0].size() + (j + 1);
          ans[1] = x;
          foundMissing = 1;
          break;
        }
      }
    }
    cout << ans[0] << " " << ans[1] << endl;
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<vector<int>> grid = {{9, 1, 7}, {8, 9, 2}, {3, 4, 6}};
  s->findMissingAndRepeatedValues(grid);
}
