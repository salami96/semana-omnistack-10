module.exports = function parseStringAsArray(stringAsArray) {
    if(stringAsArray){
        return stringAsArray.split(',').map(tech => tech.trim());
    }
    return [];
}