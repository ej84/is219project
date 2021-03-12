[![Coverage Status](https://coveralls.io/repos/github/ej84/is219project/badge.svg?branch=master)](https://coveralls.io/github/ej84/is219project?branch=master)
[![Build Status](https://travis-ci.com/ej84/is219project.svg?branch=master)](https://travis-ci.com/ej84/is219project)

# IS219 Calculator Test



# SOLID Principles for Node JS
# What is SOLID?
SOLID is an acronym that stands for the first five OOD principles as outlined by renowned software engineer Robert C. Martin. The SOLID principles are designed to help developers design robust, maintainable applications.

# S - Single Responsibiliby Principle

The single responsibility principle in JavaScript deals with the cohesiveness of modules. It states that functions and classes should only have one job. For this calculator project, separated source code files organized in appropriate directories are fair enough to follow this rule and it also makes the project look neat and easy to retrieve when necessary.

Take, for example, the ```Difference``` from src/Operations like below:

```Node JS
function Difference(a, b){      

  return a - b;
  }
```

This is one single operation for subtract and other related classes and files with importing this function can do the same one operation.

# O - Open/Closed Principle
The <a href="https://github.com/ej84/is219project/blob/master/src/Calculator.js">Calculator.js</a> file in the ```src``` directory plays typical role of this principle. The Calculator contains methods like ```AddingCalc``` and ```Duplicate```, which can be called by functions imported while the Calculator class itself does not have to be modified for each function.

```Node JS

static duplicate(){
        let newCalc = new Calculatior();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }
 ```
 
 # L - Liskov Substitution Principle
 <a href="https://github.com/ej84/is219project/blob/master/src/Models/Calculation.js">The Calculation.js</a> in Models represent this principle. It can substitute every function for calculations regardless of what the operations does like adding or dividing. In other words, the Calculation works for the same function but returns different result depending on what type of calculation is done only.
 
 ```Node JS
 
    GetResults() {
        return this.op(this.a, this.b);
    }
```

# I - Interface Segregation Principle
To implement the main Calculator as following rule of this principle, the constructor in the Calculation.js file is executed once Calculator.js file calls and imports it. It requires simply three main parameters a for the first number, b for the second number, and op for the operation reference.

```Node JS

class Calculation{
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
```

# D - Dependency Inversion Principle
According to this principle, a class is not supposed to depend on another class that is more sensitive to changes in implementation. Therefore, a method like below is dependant on the calculator class, wheares the calculator is not dependant on the calculation methods.

```Node JS
static Product(a, b) {
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
```

# Object Oriented Programming Concepts

## Encapsulation
In javascript, encapsulation refers to restrcting data so that it cannot be accessed freely from outside of the function it is used. Only methods that are inside that function can use it for operation. If I rewrite my calculation class like below, it would be a good example of an encapsulation.
```Node JS
function calculation(a, b, op){
  function result(){
    return op(a, b);
  }
  return result;
}
```
In this case, I can create a variable and assign argument for the function's parameter a, b, and op, such as:
```Node JS
let rootCalc = calculation(3, 5, Root);
rootCalc();
```
The rootCalc will call the calculation function and return the result operated by Root, but the data inside the function is still private and not accessible.

## Abstraction
Abstraction is a concept that creates a basic calculation object that can be used for more concrete definition and function. In this project, the constructor of calculation class represents this concept perfectly.
```Node JS
constructor(a, b, op) {

        this.a = a;
        this.b = b;
        this.op = op;
    }
    GetResults() {
        return this.op(this.a, this.b);
    }
```
This constructor is called automatically by its class when you create an object with the calculation class and allows it to form the calculation and use the methods inside of the calculation class like ```GetResults()``` above.

## Inheritance
