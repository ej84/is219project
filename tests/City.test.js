const City = require('../src/Models/City');

test('Create City model', () =>{
    let cityData = {
        id: 2,
        city: 'Seoul',
        city_ascii: 'Seoul',
        country: 'South Korea',
        lat: 38,
        lng: 127,
        iso2: 'KR',
        iso3: 'KOR',
        capital: 'primary',
        admin_name: 'Seoul',
        population: 9968
    };
    let output = City.create(cityData);
    expect(output).toBeInstanceOf(City);
    expect(output.id).toBe(2);
    expect(output.city).toBe('Seoul');
    expect(output.city_ascii).toBe('Seoul');
    expect(output.country).toBe('South Korea');
    expect(output.lat).toBe(38);
    expect(output.lng).toBe(127);
    expect(output.iso2).toBe('KR');
    expect(output.iso3).toBe('KOR');
    expect(output.capital).toBe('primary');
    expect(output.admin_name).toBe('Seoul');
    expect(output.population).toBe(9968);
});

test('Create city model with null data', () => {
    let output = City.create();
    expect(output).toBeInstanceOf(City);
    expect(output.id).toBeUndefined();
    expect(output.city).toBeUndefined();
    expect(output.city_ascii).toBeUndefined();
    expect(output.country).toBeUndefined();
    expect(output.lat).toBeUndefined();
    expect(output.lng).toBeUndefined();
    expect(output.iso2).toBeUndefined();
    expect(output.iso3).toBeUndefined();
    expect(output.capital).toBeUndefined();
    expect(output.admin_name).toBeUndefined();
    expect(output.population).toBeUndefined();

});