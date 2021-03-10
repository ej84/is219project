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
The calculator.js file in the src directory plays typical role of this principle. I can put additional functions from other directories for math operation and result storage like below, but do not have to change anything in the files that the calculator file impored.

```Node JS
    static Sum(a, b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
 ```
