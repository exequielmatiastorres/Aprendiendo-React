const restar = document.querySelector('#restar');
const agregar = document.querySelector('#agregar');
const botonAgregar = document.querySelector('#botonAgregar');
const price = document.querySelector('#price');
const contadorDeCompra = document.querySelector('#conteoDeCompra');

let conteo = 1;

//eventos
agregar.addEventListener('click', sumando)
restar.addEventListener('click', restando);

console.log(typeof(price.innerHTML))

function sumando() {
    conteo++;
    contadorDeCompra.value = conteo;
    

}


function restando() {
    if (conteo <= 1) {
        console.log("no se admite pedir esa cantidad")
        return;
    }
    conteo--;
    contadorDeCompra.value = conteo;
    let seteo = 
}

