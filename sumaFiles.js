const fs = require('fs')
var numero1

const getData = (fileName, type) =>

new Promise((resolve, reject) => {
  fs.readFile(fileName, type, (err, data) => {
    err ? reject(err) : resolve(parseInt(data))
  })
})

var promise1 = getData('numero1', 'utf-8')
var promise2 = getData('numero2', 'utf-8')
Promise.all([promise1, promise2]).
then((arrayValues) => {
  console.log('El numero 1 es ' + arrayValues[0])
  let suma = 0;
  arrayValues.forEach(element => {
    suma += element
  });
  console.log(suma)
  //con la funcion reduce
  let sum = arrayValues.reduce((sum, x) => sum + x)
  console.log(sum)
})