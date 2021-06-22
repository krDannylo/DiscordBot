const behavior = require('../services/behaviors');
const utils = require('../utils/file-operation');

function daysOfStream(){
    const status = behavior.checkStatusFromStream();
    if(status){
        if(utils.readData()){
            console.log(utils.readData)
        }
    }
}

daysOfStream();