const Calculator = require('../src/Calculator');

test('Calculator Adds 2 and 2', () => {
    // Instantiate the calculation
    let calc = Calculator.Sum(2, 2);
    // Test executing
    expect(calc.a).toBe(2);
    expect(calc.b).toBe(2);
    expect(calc.op).toBe("Sum");
    expect(calc.GetResults()).toBe(4);
    console.log(calc.a + " " + calc.b + " " + calc.op + " " + calc.GetResults());


});

