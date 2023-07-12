/**
 * Variable naming rues: same as java
 * Primitive Data Types
 * numbers : 13, 13.5
 * String : 'Apple', "Apple"
 * Boolean : true , false
 * Undefined : variable does NOT have a value
 * Null :
 */
/**
 * There are 3 different types of variable
 * var: variable abbreviation
 * * If there is, globally-scope is a variable definition method.
 * * You can change its value later and define the same variable again.
 * 
 * let: is equal to
 * *  let is a block-scope variable definition method.
 * * The structures we call blocks are the place between the curly brackets.
 * * The value of variables defined with let can be changed later
 * * but you cannot define the same variable again.
 * 
 * const: short for constant,
 * as soon as the value of the variable is constant, like the number Pi
 */

Number = 15
String = "Emre"

let x; // undefined
console.log(typeof x)
x = 100; // number7
console.log(typeof x)
x = 'Auto'
console.log(typeof x)
x = false;
console.log(typeof x)
x = 10;

let y = 5, z = "bjk"
console.log(y + z)
console.log(x * y)

var name = 'Mike'
var age = 35
var name_Object = { firstname: 'Jake', lastname: 'Masters' }
var turth = true
var skills = ["HTML", "CSS", "JS"]
var xx = null

//object
var student = {
    firstname: "Kate",
    lastname: "Masters",
    age: 30,
    height: 180,
    fullname: function () {
        return this.firstname + " " + this.lastname
    }
}

const ageValue = student.age
console.log(ageValue)
console.log(student.fullname())

/**
 *  code to run console 
 *  first save your code or choose auto save from File menu
 * 1-The class in which this directory is located is accessed from the terminal.
 * PS C:\Users\Fatih\Desktop\Cy-B7-pr\cypress\e2e> cd javascript_basic
 * 2- Type the full filename with node
 * PS C:\Users\Fatih\Desktop\Cy-B7-pr\cypress\e2e\javascript_basic> node a_datatypes-objects.js
 */