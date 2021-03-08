const Calculator = require('../src/Calculator');

test('Calculator Sum', () => {
    // Instantiate the calculation
    let calculation = Calculator.Sum(2, 2);
    // Test executing
    expect(calculation).toBe(4);
    console.log(calculation);


});

test('Calculator Difference', ()=>{
    let calculation = Calculator.Difference(7, 5);
    expect(calculation).toBe(2);
    console.log(calculation);

});

test('Calculator Product', ()=>{
    let calculation = Calculator.Product(7, 5);
    expect(calculation).toBe(35);
    console.log(calculation);

});

test('Calculator Quotient', ()=>{
    let calculation = Calculator.Quotient(12, 4);
    expect(calculation).toBe(3);
    console.log(calculation);

});

test('Calculator Power', ()=>{
    let calculation = Calculator.Power(2, 5);
    expect(calculation).toBe(32);
    console.log(calculation);
    if(calculation > 30){
        console.log(calculation + " is greater than 30");
    }

});

test('Calculator Root:', ()=>{
    let calculation = Calculator.Difference(4, 2);
    expect(calculation).toBe(2);
    console.log(calculation);

});