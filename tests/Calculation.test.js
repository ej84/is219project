const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Power = require('../src/Operations/Power');
const Root = require('../src/Operations/Root');

test('Instantiating Calculation', ()=>{
    let op= Sum;
    let calculation = new Calculation(3, 4, op);
    expect(calculation.a).toBe(3);
    expect(calculation.b).toBe(4);
    expect(calculation.op).toBe(op);

})

test('Calculation Adding', ()=>{
    // Arrange
    let op = Sum;
    let calculation = new Calculation(3, 4, op);
    expect(calculation.GetResults()).toBe(7);
});

test('Calculation Subtracting', ()=>{
    // Arrange
    let op = Difference;
    let calculation = new Calculation(3, 4, op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Calculation Multiplying', ()=>{
    // Arrange
    let op = Product;
    let calculation = new Calculation(3, 4, op);
    expect(calculation.GetResults()).toBe(12);
});

test('Calculation Dividing', ()=>{
    // Arrange
    let op = Quotient;
    let calculation = new Calculation(9, 3, op);
    expect(calculation.GetResults()).toBe(3);
});

test('Calculation Squaring', ()=>{
    // Arrange
    let op = Power;
    let calculation = new Calculation(3, 4, op);
    expect(calculation.GetResults()).toBe(81);
});

test('Calculation Rooting', ()=>{
    // Arrange
    let op = Root;
    let calculation = new Calculation(81, 4, op);
    expect(calculation.GetResults()).toBeCloseTo(3);
});