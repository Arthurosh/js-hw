// 2-1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// 2-2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// 2-3
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// 2-4
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// 2-5
// const fruits = ["apple", "plum", "pear", "orange"];
// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// 2-6
// const fruits = ["apple", "plum", "pear", "orange"];
// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// 2-7
// 2-8
// 2-9
// 2-10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// 2-11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   return message.split(" ").length * pricePerWord;
//   // Change code above this line
// }
// 2-12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// 2-13
// function slugify(title) {
//   // Change code below this line
//   const lowerCaseTitle = title.toLowerCase();
//   const newTitle = lowerCaseTitle.split(" ");
//   const slag = newTitle.join("-");
//   return slag;
//   // Change code above this line
// }

// 2-14
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// 2-15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// 2-16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   return firstArray.concat(secondArray).slice(0, maxLength);
//   // Change code above this line
// }

// 2-17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// 2-18
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }

// 2-19
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 2-20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// 2-21
// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(" ");
//   let max = 0;
//   let longestWord;

//   for (word of words) {
//     let len = word.length;
//     if (len > max) {
//       max = len;
//       longestWord = word;
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }

// 2-22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) numbers.push(i);
//   // Change code above this line
//   return numbers;
// }

// 2-23
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; numbers.length > i; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// 2-24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }

// 2-25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (let i = 0; i < array1.length; i +=1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// 2-26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let num of order) {
//     total += num;
//   }
//   // Change code above this line
//   return total;
// }

// 2-27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }
// ---->
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (const num of numbers) {
//     const number = num;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// 2-28
// // Change code below this line
// const a = 3 % ;
// const b = 4 % ;
// const c = 11 % ;
// const d = 12 % ;
// const e = 8 % ;
// ---->
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// 2-29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
//   // Change code above this line
// }

// 2-30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 2-31
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return number;
//   // Change code above this line
// }

// 2-32
// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true,
// якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes()
// не можна використовувати метод масив.includes(значення)

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// --------------------------------------------
// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5
// Виносимо варіанти в масив

// --------------------------------------------
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cranberries";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }
// --------------------------------------------
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// --------------------------------------------
// const colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
// --------------------------------------------
// function multiply() {
//   let total = 1;
//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// --------------------------------------------
