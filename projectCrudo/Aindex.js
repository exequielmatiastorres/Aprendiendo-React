// document.addEventListener('DOMContentLoaded', function() {
//variables
// const loupe = document.querySelector('.navFirst__loupe');
// const barraNavFirst = document.querySelector('.navFirst__search');
// const closeNavFirst = document.querySelector('.navFirst__search__button');
// const search = document.querySelector('.navFirst__search__input');
// //barra lateral
// const navLateral = document.querySelector('.navSecond')
// const logoBurger = document.querySelector('.navFirst__icon__burger')
// //cards
// const sectionOptions = document.querySelector('.optionSection__CardSection')
// const primeraTarjeta = document.querySelector('#firstCard')
// const primeraTarjetaContenidoDinamico = document.querySelector('[data-url]')

// //Eventos
// loupe.addEventListener('click', cambiandoDisplay);
// closeNavFirst.addEventListener('click', funcionando);
// search.addEventListener('input', leerInput);
// logoBurger.addEventListener('click', cambiarDisplayLateral);
// //section Options
// //link a contenido dinamico
// // primeraTarjeta.addEventListener('click', probandoDOM);

// //sección a reeemplazar
// // sectionOptions.addEventListener('click', );



// //funciones
// //leemos el input de busqueda
// function leerInput(e) {
//     console.log(e.target.value)
// }

// function cambiandoDisplay() {
//     if (loupe.style.display = 'flex') {
//         barraNavFirst.style.display = 'flex';
//         loupe.style.display = 'none';
//     }
// }

// function funcionando() {
//     if (loupe.style.display === 'none') {
//         barraNavFirst.style.display = 'none';
//         loupe.style.display = 'flex'
//     }
// }

// function cambiarDisplayLateral() {
//     if (navLateral.style.display = 'none') {
//         navLateral.style.display = 'flex'
//     }
// }



// /*seccion botones agregar*/

// const agregar = document.querySelector('.buttonMas');
// const restar = document.querySelector('.buttonMenos');
// const valor = document.querySelector('.valorDeBotones');
// const price = document.querySelector('.price');

// agregar.addEventListener('click', sumando);
// restar.addEventListener('click', restando);

// let contadorDe = 1
// const valorLomo = 20000


// function sumando() {
//     contadorDe++
//     valor.innerHTML = contadorDe;
//     nuevoPrecio = contadorDe * 20000;
//     price.innerHTML = nuevoPrecio

// }


// function restando() {
//     if (contadorDe <= 1) {
//         console.log(`imposible bajar la cantidad`)
//     } else {
//         contadorDe--
//         valor.innerHTML = contadorDe ;
//         valorNuevo = Number.parseInt(price.innerHTML)
//         nuevoPrecio = valorNuevo - valorLomo
//         console.log(nuevoPrecio)
//         price.innerHTML = nuevoPrecio;

//     } return
// }




// // });