#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int solve(vector<int> &houses, int index = 0) {
  if (index >= houses.size()) {
    return 0;
  }

  int include = houses[index] + solve(houses, index + 2);
  int exclude = solve(houses, index + 1);

  return max(include, exclude);
}

int main() {
  //
  vector<int> houses = {5, 2, 10, 6};

  cout << solve(houses) << endl;
}
