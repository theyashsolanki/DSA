#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int garbageCollection(vector<string> &garbage, vector<int> &travel) {
    int metalGarbage[] = {0, 0};
    int glassGarbage[] = {0, 0};
    int paperGarbage[] = {0, 0};

    for (int i = 0; i < garbage.size(); i++) {
      for (char c : garbage[i]) {
        switch (c) {
        case 'M':
          metalGarbage[0]++;
          metalGarbage[1] = i;
          break;
        case 'G':
          glassGarbage[0]++;
          glassGarbage[1] = i;
          break;
        case 'P':
          paperGarbage[0]++;
          paperGarbage[1] = i;
          break;
        }
      }
    }

    vector<int> prefixSum(travel.size(), 0);
    int pre = 0;
    for (int i = 0; i < travel.size(); i++) {
      prefixSum[i] = travel[i] + pre;
      pre = prefixSum[i];
    }

    int metalTravel = metalGarbage[1] == 0 ? 0 : prefixSum[metalGarbage[1] - 1];
    int glassTravel = glassGarbage[1] == 0 ? 0 : prefixSum[glassGarbage[1] - 1];
    int paperTravel = paperGarbage[1] == 0 ? 0 : prefixSum[paperGarbage[1] - 1];

    int totalTime = metalGarbage[0] + glassGarbage[0] + paperGarbage[0] +
                    metalTravel + glassTravel + paperTravel;
    return totalTime;
  }
};

int main() {
  Solution *s = new Solution();
  vector<string> garbage = {"G", "P", "GP", "GG"};
  vector<int> travel = {2, 4, 3};

  cout << s->garbageCollection(garbage, travel) << endl;
}
