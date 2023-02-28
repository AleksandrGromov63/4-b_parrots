import { products, main } from "./work_with_product";

let str1 = 'name-starts-BMW&price-<7-&quantity->=17&description-starts-7'
let str2 = 'name-contains-X5&price-<=55-&quantity->=2&description-contains-полный'
let str3 = 'name-ends-4&price->900000000-&quantity->=5&description-ends-ро'
let str4 = "name-ends-Ведро&quantity->=555&description-ends-е"
let str5 = "name-ends-Octavia&quantity->5&description-ends-од"

export const runProducts = () => {

    console.log(`::::: Массив, где производим поиск :::::`)
    console.log(`: Название, цена, количество, описание :`)
    console.log(products.map( n => '- '.concat(' ' + n[0] + ', ' + n[1] + ' руб., ' + n[2] + ' шт., "' + n[3] + '" ')).join('\n'))
    console.log('\n')

    console.log(`| Запрос 'starts': ${str1}`)
    console.log(`Результат:`)
    console.log( main(str1, products) )
    console.log('')

    console.log(`| Запрос 'contains': ${str2}`)
    console.log(`Результат:`)
    console.log( main(str2, products) )
    console.log('')

    console.log(`| Запрос 'ends': ${str3}`)
    console.log(`Результат:`)
    console.log( main(str3, products) )
    console.log('')

    console.log(`| Запрос '>=': ${str4}`)
    console.log(`Результат:`)
    console.log( main(str4, products) )
    console.log('')

    console.log(`| Запрос '<': ${str5}`)
    console.log(`Результат:`)
    console.log( main(str5, products) )
}