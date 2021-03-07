const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./Models/Calculation');

class Calculator {
    static Sum(a, b) {
        let calculation = new Calculation(a, b, "Sum");
        return calculation;
    }
    Divide(a,b) {
        return this.Result = MathOperations.Quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.Product(a,b);
    }
    Difference(a,b) {
        return this.Result = MathOperations.Difference(a,b);
    }
}
module.exports = Calculator;