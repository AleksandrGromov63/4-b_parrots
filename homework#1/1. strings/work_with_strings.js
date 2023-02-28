export function toLowercase(string){
    let result = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return result;
}

export function placementOfSpaces(string){
    let temp = string.replace(/\s+/g, ' ');
    let a = temp.replace(/(,|\.)(\S)/g, '$1 $2');
    let result = a.replace(/(\s)(,|\.)/g, '$2');
    return result;
}

export function countWords(string){
    let wordArray = string.replace(/(\s+|,|\.)/g, ' ').match(/\S+/g) || [];
    return wordArray.length;
}

export function countUniqueWords(string) {
    let wordArray = string.replace(/(\s+|,|\.)/g, ' ').toLowerCase().match(/\S+/g) || [];

    let wordMap = wordArray.reduce(function (map, word) {
        map[word] = (map[word] || 0) + 1;
        return map;
    }, {});

    return wordMap;
}