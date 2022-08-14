// 4-1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);

// 4-2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// 4-3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function makePizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// 4-4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     return onOrderError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// 4-5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (elem) {
//     totalPrice += elem;
//   });
//   // Change code above this line
//   return totalPrice;
// }

// 4-6
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (numbers) {
//     if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// 4-7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }

// 4-8
// // Change code below this line
//   const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// 4-9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// 4-10
// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// // Change code above this line

// 4-11
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }

// 4-12
// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// }

// 4-13
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else newArray.push(element);
//   });
//   return newArray;
//   // Change code above this line
// }

// 4-14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planets) => planets.length);
// console.log(planetsLengths);

// 4-15
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
// const titles = books.map((books) => books.title);
// console.log(titles);

// 4-16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap((books) => books.genres);
// console.log(genres);

// 4-17
// // Change code below this line
// const getUserNames = users => users.map(user => user.name);
// // Change code above this line

// 4-18
// // Change code below this line
// const getUserEmails = users => users.map(user => user.email)
// // Change code above this line

// 4-19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const evenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
// const oddNumbers = numbers.filter((numbers) => numbers % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

// 4-20
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((books) => books.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, books) => books.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

// 4-21
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter((books) => books.rating >= MIN_RATING);
// const booksByAuthor = books.filter((books) => books.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// 4-22
// // Change code below this line
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((users) => users.eyeColor === color);
// // Change code above this line

// 4-23
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(({age}) => age >= minAge && age < maxAge);
// // Change code above this line

// 4-24
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => users
//     .filter(user => user.friends.some(friend => friend === friendName))
// // Change code above this line

// 4-25
// // Change code below this line
// const getFriends = (users) =>
//   users
//     .flatMap((users) => users.friends)
//     .filter((friends, index, users) => users.indexOf(friends) === index);
// // Change code above this line

// 4-26
// // Change code below this line
// const getActiveUsers = (users) => users.filter(users => users.isActive);
// // Change code above this line

// 4-27
// // Change code below this line
// const getInactiveUsers = (users) => users.filter(users => users.isActive === false)
// // Change code above this line

// 4-28
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line
// const bookWithTitle = books.find((books) => books.title === BOOK_TITLE);
// const bookByAuthor = books.find((books) => books.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// 4-29
// // Change code below this line
// const getUserWithEmail = (users, email) => users.find((users) => users.email === email);
// // Change code above this line

// 4-30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(
//   (numbers) => numbers % 2 === 0
// );
// const eachElementInFirstIsOdd = firstArray.every((numbers) => numbers % 2);

// const eachElementInSecondIsEven = secondArray.every(
//   (numbers) => numbers % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every((numbers) => numbers % 2);

// const eachElementInThirdIsEven = thirdArray.every(
//   (numbers) => numbers % 2 === 0
// );
// const eachElementInThirdIsOdd = thirdArray.every((numbers) => numbers % 2);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// 4-31
// // Change code below this line
// const isEveryUserActive = (users) => users.every(users => users.isActive);
// // Change code above this line

// 4-32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((numbers) => numbers % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((numbers) => numbers % 2);

// const anyElementInSecondIsEven = secondArray.some(
//   (numbers) => numbers % 2 === 0
// );
// const anyElementInSecondIsOdd = secondArray.some((numbers) => numbers % 2);

// const anyElementInThirdIsEven = thirdArray.some((numbers) => numbers % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((numbers) => numbers % 2);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

// 4-33
// // Change code below this line
// const isAnyUserActive = users => users.some(users => users.isActive);
// // Change code above this line

// 4-34
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line
// const totalPlayTime = playtimes.reduce((total, players) => {
//   return total + players;
// });
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// 4-35
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// 4-36
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line
// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => (total += user.balance), 0);
// // Change code above this line
// console.log(calculateTotalBalance(users));

// 4-37
// // Change code below this line
// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => (total += user.friends.length), 0);
// // Change code above this line
// console.log(getTotalFriendCount(users));

// 4-38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// 4-39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((min, max) => min - max);
// const descendingReleaseDates = [...releaseDates].sort((min, max) => max - min);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// 4-40
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// 4-41
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// 4-42
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => a.balance - b.balance);
// // Change code above this line
// console.log(sortByAscendingBalance(users));

// 4-43
// // Change code below this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// // Change code above this line
// console.log(sortByDescendingFriendCount(users));

// 4-44
// // Change code below this line
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));
// // Change code above this line
// console.log(sortByName(users));

// 4-45
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((books) => books.rating >= MIN_BOOK_RATING)
//   .map((books) => books.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names);

// 4-46
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// // Change code below this line
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// // Change code above this line
// // Change code above this line
// console.log(getNamesSortedByFriendCount(users));

// 4-47
// // Change code below this line
// const getSortedFriends = users =>
//   [...users]
//     .flatMap((users) => users.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index)
//     .sort((a, b) => a.localeCompare(b));
// // Change code above this line

// 4-48
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//    return users
//     .filter((user) => user.gender === gender)
//     .reduce((totalBalance, user) => {
//       return totalBalance + user.balance;
//     }, 0);
// };
// // Change code above this line
