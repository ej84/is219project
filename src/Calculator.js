const MathOperations = require('./Operations/MathOperations');
const Calculation = require('./Models/Calculation');

class Calculator {
    static Sum(a, b) {
        return new Calculation(a, b, "Sum");
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