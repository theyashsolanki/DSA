#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> spiralOrder(vector<vector<int>> &matrix) {
    vector<int> ans;
    int startCol = 0;
    int endCol = matrix[0].size() - 1;
    int startRow = 0;
    int endRow = matrix.size() - 1;

    while (true) {
      bool gameOn = 0;
      for (int i = startCol; i <= endCol; i++) {
        gameOn = 1;
        ans.push_back(matrix[startRow][i]);
      }
      startRow++;
      if (gameOn == 0)
        break;
      gameOn = 0;

      for (int i = startRow; i <= endRow; i++) {
        gameOn = 1;
        ans.push_back(matrix[i][endCol]);
      }
      endCol--;
      if (gameOn == 0)
        break;
      gameOn = 0;

      for (int i = endCol; i >= startCol; i--) {
        gameOn = 1;
        ans.push_back(matrix[endRow][i]);
      }
      endRow--;
      if (gameOn == 0)
        break;
      gameOn = 0;

      for (int i = endRow; i >= startRow; i--) {
        gameOn = 1;
        ans.push_back(matrix[i][startCol]);
      }
      startCol++;
      if (gameOn == 0)
        break;
      gameOn = 0;
    }
    return ans;
  }
};

int main() {
  Solution *s = new Solution();
  vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  for (auto x : s->spiralOrder(matrix)) {
    cout << x << " ";
  }
  cout << "\n";
}
