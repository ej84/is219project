[![Coverage Status](https://coveralls.io/repos/github/ej84/is219project/badge.svg?branch=master)](https://coveralls.io/github/ej84/is219project?branch=master)

# IS219 Calculator Test



# SOLID Principles for Node JS
# What is SOLID?
SOLID is an acronym that stands for the first five OOD principles as outlined by renowned software engineer Robert C. Martin. The SOLID principles are designed to help developers design robust, maintainable applications.

# S - Single Responsibiliby Principle

The single responsibility principle in JavaScript deals with the cohesiveness of modules. It states that functions and classes should only have one job.

Take, for example, the ```Difference``` from src/Operations like below:

```Node JS
function Difference(a, b){      

  return a - b;
  }
```

This is one single operation for subtract and other related classes and files with importing this function can do the same one operation.

# O - Open/Closed Principle

