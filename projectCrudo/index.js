// document.addEventListener('DOMContentLoaded', function() {
//variables
const loupe = document.querySelector('.navFirst__loupe');
const barraNavFirst = document.querySelector('.navFirst__search');
const closeNavFirst = document.querySelector('.navFirst__search__button');
const search = document.querySelector('.navFirst__search__input');
//barra lateral
const navLateral = document.querySelector('.navSecond')
const logoBurger = document.querySelector('.navFirst__icon__burger')

//Eventos
loupe.addEventListener('click', cambiandoDisplay);
closeNavFirst.addEventListener('click', funcionando);
search.addEventListener('input', leerInput)
logoBurger.addEventListener('click', cambiarDisplayLateral)

//funciones

//leemos el input de busqueda
function leerInput(e) {
    console.log(e.target.value)
}

function cambiandoDisplay() {
    if (loupe.style.display = 'flex') {
        barraNavFirst.style.display = 'flex';
        loupe.style.display = 'none';
    }
}

function funcionando() {
    if (loupe.style.display === 'none') {
        barraNavFirst.style.display = 'none';
        loupe.style.display = 'flex'
    }
}

function cambiarDisplayLateral() {
    if (navLateral.style.display = 'none') {
        navLateral.style.display = 'flex'
    }
}








// });