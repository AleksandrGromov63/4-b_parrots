class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

let BMW_116 = new Product("BMW 116", 1980000, 5, "BMW 116 120л/с, мотор: 1.6 л, передний привод");
let BMW_320 = new Product("BMW 320", 2788000, 3, "BMW 320 187/с, мотор: 2.0 л, полный привод");
let BMW_X5 = new Product("BMW Х5", 5900000, 12, "BMW Х5 306/с, мотор: 3.0 л, полный привод");
let Skoda_Octavia = new Product("Skoda Octavia", 2600000, 7, "Skoda Octavia 147/с, мотор: 2.0 л, полный привод");
let Audi_A4 = new Product("Audi A4", 2700000, 18, "Audi A4 134/с, мотор: 1.6 л, передний привод");
let tmp = new Product()


let cars = [];
cars.push(BMW_116, BMW_320, BMW_X5, Skoda_Octavia, Audi_A4, tmp);

/*
    Задача
Наполнить массив объектами такого класса.
Написать метод, который получает строку вида
“name-contains-fd&price-=2-&quantity->5&description-ends-abc”
“name-starts-fd&quantity=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)
*/

export let products = [
    // Название, цена, количество, описание
    ["BMW 116", 1980000, 19, "BMW 116 120л/с, мотор: 1.6 л, передний привод"],
    ["BMW 320", 2788000, 3, "BMW 320 187/с, мотор: 2.0 л, полный привод"],
    ["BMW Х5", 5900000, 12, "BMW Х5 306/с, мотор: 3.0 л, полный привод"],
    ["Audi A4", 2700000, 18, "Audi A4 134/с, мотор: 1.6 л, передний привод"],
    ["Skoda Octavia", 2600000, 7, "Skoda Octavia 147/с, мотор: 2.0 л, полный привод"],
    ["Ведро", 25000, 7777, "Ведро 78/с, : 1.6 л, передний привод"]
]


function numberSearch(arg, ind, mark, value) { //arg, ind, mark, value
    if (value === undefined) return []
    let result = arg.reduce((accum, elem, index) => {
        switch (mark) {
            case '>':
                if (elem[ind] > +value) {
                    accum.push(index)
                }
                break
            case '<':
                if (elem[ind] < +value) {
                    accum.push(index)
                }
                break
            case '=':
                if (elem[ind] === +value) {
                    accum.push(index)
                }
                break
            case '<=':
                if (elem[ind] <= +value) {
                    accum.push(index)
                }
                break
            case '>=':
                if (elem[ind] >= +value) {
                    accum.push(index)
                }
                break
        }

        return accum;
    }, [])

    return [...new Set(result)]
}


function stringSearch(arg, ind, range, value) {
    if (value === undefined) return []
    let res = arg.reduce((acc, element, index) => {
        if (element[ind].toLowerCase().startsWith(value.toLowerCase()) && range === 'starts') {
            acc.push(index)
        }
        if (element[ind].toLowerCase().includes(value.toLowerCase()) && range === 'contains') {
            acc.push(index)
        }
        if (element[ind].toLowerCase().endsWith(value.toLowerCase()) && range === 'ends') {
            acc.push(index)
        }

        return acc;
    }, [])

    return [...new Set(res)]
}


export function main(inputRequest, prod) {


    const data = inputRequest.split('&')
    const name = data.filter(x => x.includes('name')).join('').split('-').slice(1, 3)
    const price = data.filter(x => x.includes('price')).join('').replace(/[price -]/g, '')
    const quantity = data.filter(x => x.includes('quantity')).join('').replace(/[quantity -]/g, '')
    const description = data.filter(x => x.includes('description')).join('').split('-').slice(1, 3)

    const resultName = stringSearch(prod, 0, name[0], name[1])
    const resultDescription = stringSearch(prod, 3, description[0], description[1])
    const resultPrice = numberSearch(prod, 1, price.substring(0, price.replace(/[0-9]/g, '').length), price.slice(price.replace(/[0-9]/g, '').length))
    const resultQuantity = numberSearch(prod, 2, quantity.substring(0, quantity.replace(/[0-9]/g, '').length), quantity.slice(quantity.replace(/[0-9]/g, '').length))

    let countArr = [resultName, resultPrice, resultQuantity, resultDescription].filter(n => n.length !== 0).length;

    let coincidences = [...resultName, ...resultPrice, ...resultQuantity, ...resultDescription].reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1;
        return acc;
    }, {})

    const result = []
    for (const [key, value] of Object.entries(coincidences)) {
        if (value === countArr) {
            result.push(+key);
        }
    }

    return result.map(i => prod[i]).join('\n')
}