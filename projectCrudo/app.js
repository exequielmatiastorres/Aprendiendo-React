// ventana dialog
// window.show.addEventListener('click', () => {
//     window.dialog.showModal();
// })

// window.hide.addEventListener('click', () => {
//     window.dialog.close();
// })



//const menuIntera = document.querySelector('.menu');
//const barra = document.querySelector('.barraNavegacion');
//const change = menuIntera.addEventListener('click', cambiarDisplay);
// menuIntera.addEventListener('click', cambiarDisplay2);
// function cambiarDisplay() {
//     if (barra.style.display === 'none') {
//         barra.style.display = 'flex';
//     } else {
//         barra.style.display = 'none';
//     }
// }

document.addEventListener('DOMContentLoaded', () => {

    const lupa = document.querySelector('.searchTest');
    const search = document.querySelector('.boxSearch');
    const botonClose = document.querySelector('.buttonSearch');

    lupa.addEventListener('click', cambiarDisplay2)
    botonClose.addEventListener('click', closeBarra)
    // botonClose.addEventListener('click', cambiarDisplay3)

    function cambiarDisplay2() {
        if (lupa.style.display = 'flex') {
            search.style.display = 'flex'
            lupa.style.display = 'none'
        }
    }
    
    function closeBarra() {
        if (lupa.style.display = 'none') {
            search.style.display = 'none'
            lupa.style.display = 'flex'
        }
    }
   
});



// function cambiarDisplay3() {
//     console.log("Desde boton close")
// }



/* whatsapp funcionalidad */

async function compartirObjeto() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Objeto interesante',
          text: 'Echa un vistazo a esto:',
          url: 'URL_DEL_OBJETO_O_PAGINA', // Opcional: URL relacionada
          // files: [/* Array de objetos File */], // Para compartir archivos (soporte limitado)
        });
        console.log('Contenido compartido exitosamente');
      } catch (error) {
        console.log('Error al compartir', error);
      }
    } else {
      console.log('La API de Compartir Web no es compatible');
      // Ofrecer un método alternativo (como el enlace wa.me)
    }
  }