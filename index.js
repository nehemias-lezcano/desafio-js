class banco{
    constructor(id, nombre, tasa12, tasa24, tasa36) {
        this.id=id
        this.nombre=nombre
        this.tasa12=tasa12
        this.tasa24=tasa24
        this.tasa36=tasa36
    }
}

const bancoNacion = new banco(1, 'bancoNacion', 10, 11 , 12)
const santender = new banco(2, 'santender', 12 , 14 ,15)
const frances = new banco(3, 'frances',8 , 11 ,  14)

console.log(bancoNacion,santender,frances)

let bancoSeleccionado = parseInt(
    prompt(
      'Ingresa el banco que deseas cotizar 1.bancoNacion - 2.santender - 3.frances'
    )
)


console.log(bancoSeleccionado)

//variable para condicion
let escogioBanco = false
//info banco selec
let infoBancoSeleccionado

while (escogioBanco === false) {
    if (bancoSeleccionado === bancoNacion.id) {
      escogioBanco = true
      infoBancoSeleccionado = bancoNacion
    } else if (bancoSeleccionado === santender.id) {
      escogioBanco = true
      infoBancoSeleccionado = santender
    } else if (bancoSeleccionado === frances.id) {
      escogioBanco = true
      infoBancoSeleccionado = frances
    } else {
      alert('El dato ingresado es incorrecto')
      bancoSeleccionado = parseInt(
        prompt(
          'Ingresa el banco que deseas cotizar 1.bancoNacion - 2.santender - 3.frances'
        )
      )
    }
}

console.log(infoBancoSeleccionado)


const montoAPrestar = parseInt(prompt('Ingresa el monto que deseas solicitar'))
// funcion cuota mensual
const calcularCuotaMensual = (valor, interes, meses) => {
    const cuota = (valor + (meses * interes) / 100) / meses
    return cuota
  }
  
  const cuota12 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa12,
    12
  )
  const cuota24 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa24,
    24
  )
  const cuota36 = calcularCuotaMensual(
    montoAPrestar,
    infoBancoSeleccionado.tasa36,
    36
)
//console.log(cuota12, cuota24, cuota36)
alert(
    `Las opciones que te ofrece ${
      infoBancoSeleccionado.nombre
    } son: ${cuota12.toFixed(2)} $arg a 12 meses - ${cuota24.toFixed(
      2
    )} $arg a 24 meses - ${cuota36.toFixed(2)} $arg a 36 meses`
  )