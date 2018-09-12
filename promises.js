const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  name: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado notas del opositor con id: ${id}.`))
    }
  })
}


// crea promesa para obtener las notas del opositor 1
const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const notasOpositor = notas.filter((nota) => nota.id === id)
    if (notasOpositor.length) {
      resolve(notasOpositor)
    } else {
      reject(new Error(`No se ha encontrado notas del opositor con id: ${id}.`))
    }
  })
}

// crea promesa para obtener el nombre y las notas del opositor1








const getResultado = (id) => {
  let opositor
  return getOpositor(id).then((data) => {
    opositor = data
    return getNotas(opositor.id)
  }).then((notas) => {
    let media = 0
    if (notas.length > 0) {
      media = notas.map((nota) => nota.nota).reduce((a, b) => a + b) / notas.length
    }
    return `${opositor.nombre} tiene una media de ${media} en la oposición de ${opositor.especialidad}`
  })
}


getOpositor(1)
  .then((opositor) => {
  console.log(opositor)
  })
  .catch((e) => {
  console.log(e)
})
getNotas(1).then((notas) => {
  console.log(notas)
}).catch((e) => {
  console.log(e)
})

getResultado(1)
  .then(text => console.log(text))
  .catch(e => console.log(e))
