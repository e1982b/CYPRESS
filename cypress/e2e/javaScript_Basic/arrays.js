/**
 There is no Collection in JS. In JS we only have Arrays and Map
NOT Fixed size
There are two important Brackets in JS
1 - [] ----> creates an Array
2 - {} ----> creates an object
  
 */

var scores = new Array();                // empty Array
var score = [];                           // empty Array as oben
var numbers = new Array(10);             // Array with 10 elements
var MyNumbers = new Array(2, 4, 6, 8, 10)    // empty Array
var goals = Array();                     // empty Array without new
var sing = Array("Blau");                 // empty with one element

// Array Example
var tools = ["Selenium", "Cucumber", "TestNG", "Appium", "Postman", "RestAssured"]

console.log(tools);
console.log(tools.toString);
console.log(tools[3]);

const str = tools.toString;
console.log(str);

const join = tools.join(" * ");
console.log(join);            // add * between elements

const pop = tools.pop();
console.log(pop);            // removes last element from array
console.log(tools);

const push = tools.push("Jira");
console.log(push);           // adds element end of the array
console.log(tools);

const shift = tools.shift();
console.log(shift);            // removes first element from array
console.log(tools);

const unshift = tools.unshift("Cypress");
console.log(unshift);            // adds a element beginning of array
console.log(tools);

const unshift2 = tools.unshift("Selenium");
console.log(unshift2);            // adds a element beginning of array
console.log(tools);

const sort = tools.sort();        // sorts by name
console.log(tools);

const reverse = tools.reverse();        // unsorts by name
console.log(tools);



