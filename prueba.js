//1)
//A-
const numeros = [3, 7, 2, 9, 12, 5, 8];

const numeros2 =numeros.filter(numeros => numeros > 5,) 
console.log(numeros2)


//b-

const npares = numeros.filter(numeros => numeros % 2 === 0)
console.log(npares)

//2
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Lucía", nota: 9 },
  { nombre: "Pedro", nota: 4 }];

//a-
const nombres = estudiantes.map(estudiantes => estudiantes.nombre)
console.log(nombres)

//b-
const notas = estudiantes.filter(estudiantes => estudiantes.nota >= 6)
console.log(notas)

//c-
const aprobados = estudiantes.map(estudiantes => {
    if (estudiantes.nota >= 6)
        console.log("desaprobado")
    

    else 
      console.log("aprobado")})
 console.log(aprobados)