const Calculation = require('./Models/Calculation');
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Power = require('./Operations/Power');
const Root = require('./Operations/Root');


class Calculator {
    static Calculations = [];

    static Sum(a, b) {
        let calculation = new Calculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a, b) {
        let calculation = new Calculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Product(a, b) {
        let calculation = new Calculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Quotient(a, b) {
        let calculation = new Calculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Power(a, b) {
        let calculation = new Calculation(a,b,Power);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Root(a, b) {
        let calculation = new Calculation(a,b,Root);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static ClearList() {
        this.Calculations = [];
    }

    static AddingCalc(calculation){
        this.Calculations.push(calculation);
    }

    static GetLastCalc(){
        return this.Calculations[this.Calculations.length-1];
    }

    static duplicate(){
        let newCalc = new Calculatior();
        newCalc.Calculations = this.Calculations;
        return newCalc;
    }

}
module.exports = Calculator;