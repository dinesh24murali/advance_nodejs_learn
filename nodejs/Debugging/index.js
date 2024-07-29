var a = 10,
  b = 20;

function sum(x, y) {
  console.log(x + y);
  return x + y;
}
setTimeout(() => {
  debugger;
  sum(a, b);
}, 1000);
