#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
  void transpose(vector<vector<int>> &matrix) {
    for (int i = 0; i < matrix.size(); i++) {
      for (int j = i; j < matrix[0].size(); j++) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  void reverse(vector<int> &arr) {
    int start = 0;
    int end = arr.size() - 1;
    while (start <= end) {
      int temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++, end--;
    }
  }
  void rotate(vector<vector<int>> &matrix) {
    transpose(matrix);

    for (int i = 0; i < matrix.size(); i++) {
      reverse(matrix[i]);
    }
  }
};

int main() {
  Solution *s = new Solution();
  std::vector<std::vector<int>> matrix = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9},
  };
  s->rotate(matrix);
  for (int i = 0; i < matrix.size(); i++) {
    for (int j = 0; j < matrix[0].size(); j++) {
      cout << matrix[i][j] << " ";
    }
    cout << "\n";
  }
}
