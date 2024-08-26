const pkm = 89.50
const ndias = 6
const distancia = 2000
let preciopasaje = pkm*distancia

if((distancia>1000)&&(dias>7)){
    let descuento = preciopasaje * 0.30
    let preciopasaje = preciopasaje - descuento
    console.log("El valor a pagar es " + preciopasaje)
}else{
 console.log("El valor a pagar "+preciopasaje)
}
