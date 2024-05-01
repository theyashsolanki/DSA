#include <iostream>
#include <vector>

using namespace std;

bool isPossible(int sourceX, int sourceY, vector<vector<int>> &maze,
                vector<vector<bool>> &visited) {

  if (sourceX >= maze[0].size() || sourceX < 0)
    return false;

  if (sourceY >= maze.size() || sourceY < 0)
    return false;

  if (visited[sourceY][sourceX] == 1)
    return false;

  if (maze[sourceY][sourceX] == 0)
    return false;

  return true;
}

void solve(vector<vector<int>> &maze, int &destinationX, int &destinationY,
           int sourceX, int sourceY, string &path,
           vector<vector<bool>> &visited) {
  if (sourceX == destinationX && sourceY == destinationY) {
    cout << path << endl;
    return;
  }

  // up
  if (isPossible(sourceX, sourceY - 1, maze, visited)) {
    sourceY--;
    visited[sourceY][sourceX] = 1;
    path += "U";
    solve(maze, destinationX, destinationY, sourceX, sourceY, path, visited);
    visited[sourceY][sourceX] = 0;
    path.pop_back();
    sourceY++;
  }

  // down
  if (isPossible(sourceX, sourceY + 1, maze, visited)) {
    sourceY++;
    visited[sourceY][sourceX] = 1;
    path += "D";
    solve(maze, destinationX, destinationY, sourceX, sourceY, path, visited);
    visited[sourceY][sourceX] = 0;
    path.pop_back();
    sourceY--;
  }

  // left
  if (isPossible(sourceX - 1, sourceY, maze, visited)) {
    sourceX--;
    visited[sourceY][sourceX] = 1;
    path += "L";
    solve(maze, destinationX, destinationY, sourceX, sourceY, path, visited);
    visited[sourceY][sourceX] = 0;
    path.pop_back();
    sourceX++;
  }

  // right
  if (isPossible(sourceX + 1, sourceY, maze, visited)) {
    sourceX++;
    visited[sourceY][sourceX] = 1;
    path += "R";
    solve(maze, destinationX, destinationY, sourceX, sourceY, path, visited);
    visited[sourceY][sourceX] = 0;
    path.pop_back();
    sourceX--;
  }
}

int main() {
  vector<vector<int>> maze = {
      {1, 1, 0},
      {1, 1, 0},
      {1, 1, 1},
  };
  int destinationX = 1;
  int destinationY = 1;
  int sourceX = 0;
  int sourceY = 0;
  string path = "";
  vector<vector<bool>> visited(maze.size(), vector<bool>(maze[0].size(), 0));
  visited[sourceY][sourceX] = 1;
  solve(maze, destinationX, destinationY, sourceX, sourceY, path, visited);
}
