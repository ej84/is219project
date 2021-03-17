const CSVReader = require('../src/CSVReader');
const City = require('../src/Models/City')

test('CSV Reader reads file', () => {
    let output = CSVReader.getCSV('data/worldcities.csv', City);
    expect(output).toBeInstanceOf(Array);
});

test('CSV Reader records', ()=> {
    let output = CSVReader.getCSV('data/worldcities.csv',City);
    expect(output).toHaveLength(6);

});

test('CSV Reader model type', ()=>{
    let output = CSVReader.getCSV('data/worldcities.csv',City);
    output.forEach(function (data){
        expect(data).toBeInstanceOf(City);
    })

});