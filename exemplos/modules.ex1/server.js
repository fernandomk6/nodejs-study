const operations = require('./operations')
const par = require('./funcoes')
const funcoes2 = require('./funcoes2')
const x = funcoes2.adicao(3, 5) // 8
const y = funcoes2.subtracao(3, 5) // - 2

/**
 * caso o "./" fosse omitido, o node buscaria o modulo operations dentro 
 * da node modules, que e a pasta padrao dos modulos
 * 
 * por usar o "./" explicitamos que queremos obter um modulo diferente
 */

const value1 = operations.var1
const value2 = operations.var2

console.log(par(value1))
console.log(par(value2))

console.log(x)
console.log(y)
