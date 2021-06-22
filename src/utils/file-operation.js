const fs = require("fs");

function writeData(data){
    fs.writeFile('days.txt', data, (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!');
    });
}

function readData(){
    const result = fs.readFileSync('days.txt', 'utf-8')
    if(result) return result
    return null;
}

module.exports = {
    writeData,
    readData
}