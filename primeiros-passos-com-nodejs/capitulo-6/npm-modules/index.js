const _ = require('lodash')
const array = [4, 6, 2, 8, 3, 5, 9, 2]

console.log('Imprimindo de 3 em 3')
_.chunk(array, 3).forEach((item) => {
    console.log('---')
    item.forEach((item) => console.log(item))
})
