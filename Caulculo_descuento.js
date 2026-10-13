let totalCompra10 = 50000;
let esCliente= false;
let descuento = 0;
let totalFinal = 0;

if (totalCompra10 > 100000) {
    if (esCliente) {
        descuento = totalCompra10 * 0.20;
        totalFinal = totalCompra10 - descuento;
        console.log("Descuento aplicado: " + descuento);
        console.log("Total a pagar: " + totalFinal);
    } else {
    descuento = totalCompra10 * 0.10;
    totalFinal = totalCompra10 - descuento;
    console.log("Descuento aplicado: " + descuento);
    console.log("Total a pagar: " + totalFinal);
    }
 } else {
    if (esCliente) {
        descuento = totalCompra10 * 0.05;
        totalFinal = totalCompra10 - descuento;
        console.log("Descuento aplicado: " + descuento);
        console.log("Total a pagar: " + totalFinal);
    } else {
        totalFinal = totalCompra10;
        console.log("No hay descuento aplicado.");
        console.log("Total a pagar: " + totalFinal);
    }
 }