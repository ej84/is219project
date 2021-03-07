const Calculation = require('../src/Models/Calculation');

test('Calculation Adding two Numbers', ()=>{

    // Arrange

    let calculation = new Calculation(3, 4, "Sum");
    expect(calculation.a).toBe(3);
    expect(calculation.b).toBe(4);
    expect(calculation.op).toBe("Sum");
    console.log(calculation.a + " " + calculation.b + " " + calculation.op);
});