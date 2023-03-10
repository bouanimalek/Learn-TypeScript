function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResultOfThis(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}
printResultOfThis(add(5, 12));

// let combineValues__: Function;
let combineValues__Of: (a: number, b: number) => number;
combineValues__Of = add;
// combineValues__ = 5;
// combineValues__Of= printResultOfThis;

console.log(combineValues__Of(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
