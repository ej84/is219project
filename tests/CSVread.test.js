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

test('CSV Reader creates populated model in the output', ()=> {
    let output = CSVReader.getCSV('data/worldcities.csv', City);
    expect(output[1]).toEqual(
        expect.objectContaining({
            admin_name: 'New York',
            capital: '',
            city: 'New York',
            city_ascii: 'New York',
            country: 'United States',
            id: '1840034016',
            iso2: 'US',
            iso3: 'USA',
            lat: '40.6943',
            lng: '-73.9249',
            population: '19354922.0'

        })
    );
});