#include <iostream>

using namespace std;

class Node {
public:
  static int length;
  static Node *head;
  static Node *tail;
  int data;
  Node *next;
  Node *prev;

  Node() {
    this->next = NULL;
    this->prev = NULL;
    length++;
  }

  Node(int data) {
    if (head == NULL) {
      head = this;
      tail = this;
    }
    length++;
    this->data = data;
  }

  static void printFromHead() {
    Node *temp = head;
    while (temp != NULL) {
      cout << temp->data << endl;
      temp = temp->next;
    }
  }

  static void printFromTail() {
    Node *temp = tail;
    while (temp != NULL) {
      cout << temp->data << endl;
      temp = temp->prev;
    }
  }

  static void insertAtHead(int data) {
    Node *newHead = new Node(data);
    if (head != newHead) {
      head->prev = newHead;
      newHead->next = head;
      head = newHead;
    }
  }

  static void insertAtTail(int data) {
    Node *newTail = new Node(data);
    if (tail != newTail) {
      tail->next = newTail;
      newTail->prev = tail;
      tail = newTail;
    }
  }

  static void deleteAtHead() {
    Node *temp = head->next;
    temp->prev = NULL;
    head->next = NULL;

    delete head;

    head = temp;
  }

  static void deleteAtTail() {
    Node *temp = tail->prev;
    tail->prev = NULL;
    delete tail;

    tail = temp;
    tail->next = NULL;
  }

  static void deleteAt(int pos) {
    if (pos < 1 || pos > length) {
      cout << "index out of bound" << endl;
    }
    if (pos == 1) {
      deleteAtHead();
    }
    if (pos == length) {
      deleteAtTail();
    }
    Node *temp = head;
    int i = 1;
    while (i < pos - 1 && temp != NULL) {
      i++;
      temp = temp->next;
    }

    if (temp == NULL) {
      return;
    }

    Node *p = temp->next;
    temp->next = p->next;
    p->next->prev = temp;

    p->next = NULL;
    p->prev = NULL;

    delete p;
  }

  ~Node() { cout << "dtor called for " << this->data << endl; }
};

int Node::length = 0;
Node *Node::head = NULL;
Node *Node::tail = NULL;

int main() {
  Node *list = new Node(5);
  list->insertAtHead(7);
  list->insertAtHead(8);
  list->insertAtHead(9);
  list->insertAtTail(99);
  list->insertAtTail(100);
  list->deleteAtTail();
  list->deleteAtHead();
  list->printFromHead();
}
