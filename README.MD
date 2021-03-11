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

