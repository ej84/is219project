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
This constructor is called automatically by its class when you create an object with the calculation class and allows it to form the calculation and use the methods inside of the calculation class like ```GetResults()``` above. You do not have to change the original class for ```calculation``` in this way.

## Inheritance
Inheritance refers to concept that a general class like the ```Calculation``` is extended to a specified class. This concept is useful when you need to write a class file that is based on general object but works for specifically defined function like the example below.
```Node JS
class gamescoreCalculation extends Calculation{
  constructor(a, b, op, player){
    super(a, b, op);
    this.player = player;
  }
  GetScore(){
    console.log(player + "'s score: " + super.GetResults());
  }
  
}
```

## Polymorphism
 Polymorphism means "many forms" in simple word, and it can be achieved and found in the classes that are related to each other by inheritance. We already know that the inheritance helps a class derive other class' attribute and method, but polymorphism works a little bit differently. For example, here is a java class code regarding with the polymorphism.
 ```Java
 class Animal {
  public void animalSound() {
    System.out.println("The animal makes a sound");
  }
}

class Pig extends Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}

class Dog extends Animal {
  public void animalSound() {
    System.out.println("The dog says: bow wow");
  }
}

class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object
    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
```
As you can see, the ```Pig``` and ```Dog``` classes inherit the Animal class' attribute and method, and the Animal class is used to create an Animal object as well as to create both a Pig and Dog object in the Main class. It is also possible for the Pig and Dog object to use the animalSound() method because they inherite the Animal class. This is how polymorphism helps  the interaction with the original class and subclasses that inherit it.

# Design Patterns for OOP

## Creational Pattern, prototype: ```duplicate``` in Calculator

The ```duplicate()``` method in the ```Calculator``` can be an example of this pattern. To keep the calculation record that has been performed by the user every time they update the calculator object, they can make good use of this function to achieve that goal. You do not have to worry about creating a new object for calculator or calculation if you forget and lose the track of the calculation recording now that the ```duplicate()``` function clones the records of all calculations.

## Structural pattern, facade: Calculator
facade pattern is used to allow the users to approach an interface that provide the simplest way to use the program without having to performing complicated processes like implementing class for object creation, or importing a method to call. It still lets them choose what file name or path to enter to solve their problems with the facade structured interface. The code example from ```calculator.test.js``` below is a nice example to explain it:
```Node JS
const Calculation = require('./Models/Calculation');
const Quotient = require('./Operations/Quotient');
static Quotient(a, b) {
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

```
As you can see, ```Calculation``` and ```Quotient``` classes are already imported and all the user has to do is to enter two specific numbers in calculation variable to create a calculation object with division operation and execute it.

## Behavioral pattern, 
