const sort = (arr, o) => {
  if (o.j === arr.length) {
    [arr[o.i], arr[o.min]] = [arr[o.min], arr[o.i]];
    o.i++;
    o.j = o.i;
    o.min = o.i;
  }
  if (o.i === arr.length - 1) return;
  if (arr[o.min] > arr[o.j]) {
    o.min = o.j;
  }
  o.j++;
  sort(arr, o);
};

function selectionSort(arr) {
  const util = {
    i: 0,
    j: 0,
    min: 0,
  };
  sort(arr, util);
}

const arr = [5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);
