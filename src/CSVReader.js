const parse = require('csv-parse/lib/sync');
const fs = require('fs');

class CSVReader{
    static getCSV(filePath, modelType){
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines:true

        };
        let fileContents = fs.readFileSync(filePath);
        const records = parse(fileContents, options);
        let list = Array();
        records.forEach(function (data){
            list.push(modelType.create(data));
        })

        return list;

    }

}

module.exports = CSVReader;