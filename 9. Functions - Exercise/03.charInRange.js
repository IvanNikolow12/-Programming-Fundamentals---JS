function charInRange(a, b) {
  let firstResult = a.charCodeAt(0);
  let secondResult = b.charCodeAt(0);

  let start = firstResult < secondResult ? firstResult : secondResult;
  let end = firstResult > secondResult ? firstResult : secondResult;
  let line = "";
  for (let i = start + 1; i < end; i++) {
    line += String.fromCharCode(i) + " ";
  }
  return line;
}
console.log(charInRange("a", "q"));
console.log(charInRange("#", ":"));
console.log(charInRange("C", "#"));
