

function CardItemCategoria({name, imagenUrl}) {
  return (
    <>
        
      <section className="w-[20vw] relative h-28 bg-red-300 overflow-hidden rounded-2xl">
          <section className="  ">
            <img src={imagenUrl} alt="Imagen de sección hamburguesa" className="w-[33vw] h-28 object-cover"/>
          
          </section>

          <div className="h-24 w-full absolute top-10">
              <h2 className="text-2xl text-white  font-bold text-center max-w-full bg-slate-400 tracking-wider">{name}</h2>
          </div>
        

      </section>
        
    </>
  )
}

export default CardItemCategoria;


// la url es /categoria/id

/*
bg-no-repeat (opcional): Evita que la imagen de fondo se repita.
bg-cover (opcional): Escala la imagen para cubrir todo el contenedor, recortando partes si es necesario para mantener la proporción.
bg-center (opcional): Centra la imagen de fondo dentro del contenedor.


falta sección enlace

*/