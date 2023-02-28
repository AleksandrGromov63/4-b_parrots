import {sum, sub, div, multiply} from "./work_with_numbers.js";

export const runNumbers = () => {

    let first = '59346872963598734258973625872349857634285634295634928763249876347852';
    let second = '857203465273465834275693274563456928345'

    console.log(`\n------  Сумма ----------\n`);

    console.log(sum(first, second));

    console.log(`\n------  Вычитание ----------\n`);

    console.log(sub(first, second));

    console.log(`\n------  Деление ----------\n`);

    console.log(div(first, second));

    console.log(`\n------  Умножение ----------\n`);

    console.log(multiply(first, second));
}