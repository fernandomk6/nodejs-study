const operations = require('./operations')

/**
 * caso o "./" fosse omitido, o node buscaria o modulo operations dentro 
 * da node modules, que e a pasta padrao dos modulos
 * 
 * por usar o "./" explicitamos que queremos obter um modulo diferente
 */

console.log(operations.var1)
console.log(operations.var2)
