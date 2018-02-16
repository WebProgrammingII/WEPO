/*
    ES6 methods examples
**/

var namedExport = require('./named_exports');
var Service = require('./default_exports');

// 1. Define a function which shows how const and let are block scoped, vs. var is function scoped
if (true) {
  const myVar = 1;
  console.log(myVar);
}

// 2. Import two methods from named exports sum and divide

// 3. Import a service as a default export

// 4. Use Object.assign() with two params
let obj = {};
Object.assign(obj, { x: 1, y: 2 });
console.log(obj);

// 5. Use Object.assign() with three params

// 6. Use Object.assign() with four params

// 7. Show how template literals can be used by creating the string Random number: {someRandomNumber}

// 8. Use the spread operator with two arrays

// 9. Use the spread operator in to a function which console logs its arguments

// 10. Use the spread operator to spread an array to console log

// 11. Define an object which makes use of enhanced object literals

// 12. Define a function called add element to array and make use of default params

// 13. Destructure a user object

// 14. Destructure a list of three string
