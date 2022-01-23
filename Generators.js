// //1. Write iterator function for an array that returns each value of the array when called, one element at  a time
// const returnIterator = (arr) => {
//   let i = 0;
//   let obj = {
//     next: () => {
//       let result = [i, arr[i]];
//       i++;

//       return result;
//     },
//   };
//   return obj;
// };

// const array2 = ["a", "b", "c", "d"];
// const myIterator = returnIterator(array2);

// console.log(myIterator.next()); // -> should log [0, 'a']
// console.log(myIterator.next()); // -> should log [1, 'b']
// console.log(myIterator.next()); // -> should log [2, 'c']

//2. Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!) Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
// function Words(string) {
//   this.str = string;
// }
// Words.prototype[Symbol.iterator] = function () {
//   this.str = this.str.split(" ");

//   let nextIndex = 0;

//   return {
//     next: () => {
//       if (nextIndex < this.str.length) {
//         return {
//           value: this.str[nextIndex++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };
// let str = new Words("The task solved");
// for (let item of str) {
//   console.log(item);
// }

// // երկրորդ տարբերակ
// function Words(string) {
//   this.str = string;
// }
// Words.prototype[Symbol.iterator] = function* () {
//   this.str = this.str.split(" ");
//   for (let i = 0; i < this.str.length; i++) {
//     yield this.str[i];
//   }
// };
// let str = new Words("The task solved");
// for (let item of str) {
//   console.log(item);
// }

// 3. Write a function that will console.log "hello there", or "bye", every three seconds depending on if the word passed into the function is 'english'. Do not use any type of loop constructor and only make the call to createConversation once.
// function* createConversation(str) {
//   if (str === "english") {
//     yield setInterval(() => console.log("hello there"), 3000);
//   } else {
//     yield setInterval(() => console.log("bye"), 3000);
//   }
// }
// console.log(createConversation("english").next());

// 4. Write a generator function which takes 3 arguments` start, end, step, and gives back values in range [start, end], incrementing by "step".
// function* rangeIter(start, end, step) {
//   let iteration = 0;
//   for (let i = start; i < end; i++) {
//     let j = i * step;
//     iteration++;
//     yield j;
//   }
//   return iteration;
// }

// var r1_10 = rangeIter(1, 5, 2);

// for (let k of r1_10) {
//   console.log(k);
// }

// 5. Write a function which takes an array as argument and removes duplicates from that array
// function removeDuplicates(arr) {
//   let newArr = [];
//   let set = new Set(arr);
//   for (let item of set.values()) {
//     newArr.push(item);
//   }
//   return newArr;
// }

// let arr = [1, 2, 2, 1, 1];
// console.log(removeDuplicates(arr));

// Ex: [1, 2, 2, 3] --> [1, 2, 3]
// [1, 1, 1] --> [1]

// 6. Write a function which takes an array with length "n" as argument and swaps 1st and nth, 2nd and (n-1)th and so on items.
//
// function reverse(arr, n) {
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.unshift(arr[i]);
//   }
//   return newArr;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(reverse(arr, 4));

// s
// Ex: [1, 2, 3, 4] --> [4, 3, 2, 1]
// [1, 2, 3, 4, 5] --> [5, 4, 3, 2, 1]

// Պահանջը միքիչ լավ չհասկացա, 2 ձևովել գրեցի։

//7. what will be the output, why ?
// async function getData() {
//   return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);

// Ունենք async ֆունկցիա որը վերադարձնումա fulfilled state-ով Promise, հետո հայտարարում ենք data, որը հավասար է getData(),
// այսինքն այս պահին քանի որ await-ա, Promise resolve-ա լինում, գնում միկրոթասկերի հերթ, հետո callstack և կատարվում։ Քանի որ,
// յուրաքանչուր async ֆունկցիա return-ա անում promise, data կլինի pending վիճակում getData() ֆունկցիայի return արած promise:
//Արդյունքում տպումա pending վիճակում promise: Եթե Promise.resolve("I made it!")-ի փոխարեն լիներ Promise.resolve(console.log("I made it!"));
// կտպեր "I made it!", հետո նոր pending state-ով promise:

// 8. what will be the output, why ?
// const myPromise = () => Promise.resolve("I have resolved!");

// function firstFunction() {
//   myPromise().then((res) => console.log(1, res));
//   console.log("first");
// }

// async function secondFunction() {
//   console.log(2, await myPromise());
//   console.log("second");
// }

// firstFunction();
// secondFunction();
// Սկբից myPromise resolve-ա լինում, հետո մտնումա firstFunction և myPromise().then((res) callback ուղարկում միկրոթասկերի հերթ
//console.log("first"); ուղարկումա callstack, արվում դուրսա գալիս,  հետո secondFunction որը async-ա, այսինքն մինչև mPromise
//չավաչտվի առաջ չի գնա, այդ պահին գնումա միկրոթասկերի հերթ, որտեղ առաջինը console.log(1, res)), ընկնումա callstack և տպում
// 1 և "I have resolved!", հետո  console.log(2, await myPromise());,որը տպումա 2 "I have resolved!", հետո նոր հասնում
//console.log("second"); քցում callstack և տպում։ Արդյունքում՝ "first",1 և "I have resolved!", 2 "I have resolved!","second"։
