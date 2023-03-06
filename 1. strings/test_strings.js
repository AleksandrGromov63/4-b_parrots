import {toLowercase, placementOfSpaces, countWords, countUniqueWords} from "./work_with_strings.js";

export const runStrings = () => {

    let str = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , ' +
        'а перед знаками их быть не должно .    ' +
        'Если есть лишние подряд идущие пробелы, они должны быть устранены.';

    console.log(`\n------  Задание #1 ----------\n`);

    console.log(toLowercase(str));

    console.log(`\n------  Задание #2 ----------\n`);

    console.log(placementOfSpaces(str));

    console.log(`\n------  Задание #3 ----------\n`);

    console.log(countWords(str));

    console.log(`\n------  Задание #4 ----------\n`);

    console.log(countUniqueWords(str));
}
