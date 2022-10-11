function addAndSubtract(x, y, z) {
  function sum(x, y) {
    return x + y;
  }
  return sum(x,y) - z;
}
console.log(addAndSubtract(23, 6, 10));
