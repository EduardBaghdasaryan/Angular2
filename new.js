// "use strict";
// class Shape {}
// class Square extends Shape {
//   constructor(sideSize) {
//     super();
//     this.sideSize = sideSize;
//   }
//   perimeter() {
//     return 4 * this.sideSize;
//   }
//   sidesCount() {
//     return 4;
//   }
//   draw() {
//     return "Square!";
//   }
// }
// class Triangle extends Shape {
//   constructor(a, b, c) {
//     super();
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   perimeter() {
//     return this.a + this.b + this.c;
//   }
//   sidesCount() {
//     return 3;
//   }
//   draw() {
//     return "Triangle";
//   }
// }
// class List {
//   constructor(values = []) {
//     this.values = values;
//   }
//   add(data) {
//     return this.values.push(data);
//   }
//   remove(data) {
//     if (this.values.indexOf(data) === -1) {
//       return false;
//     } else {
//       this.values.splice(this.values.indexOf(data), 1);
//       return true;
//     }
//   }

//   static from<T> (data:Array <T>) {
//       return new List <T>
//   }

//   getValues() {
//     return this.values;
//   }
// }
// const shapes = new List();
// shapes.add(new Square(4));
// shapes.add(new Square(5));
// shapes.add(new Triangle(3, 4, 5));
// shapes.add(new Triangle(7, 4, 8));
// // 1
// shapes.getValues().forEach((shape) => {
//   console.log(
//     "Shape:",
//     shape.draw(),
//     "sides:",
//     shape.sidesCount(),
//     "perimeter:",
//     shape.perimeter()
//   );
// });
// // 2
// const squares = shapes.getValues().filter((item) => item.sidesCount() === 4);
// console.log(squares);

// Write a function which takes an array as argument and removes duplicates from that array
function removeDuplicates(arr) {
  let newArr = [];
  let set = new Set(arr);
  for (let item of set.values()) {
    newArr.push(item);
  }
  return newArr;
}

let arr = [1, 2, 2, 1, 1];
console.log(removeDuplicates(arr));
