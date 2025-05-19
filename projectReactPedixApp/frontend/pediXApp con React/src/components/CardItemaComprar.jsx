import lomo from '../images/2LomosCompletos.jpg'
import flechaDerecha from '../images/flechaDerecha.png'

function CardItem({name, price}) {
  return (

    <a href="#">
    <section className="w-[30vw] h-28 bg-red-300 rounded-2xl flex justify-between gap-4 mb-10">

          <div className=''>
            <img src={lomo} alt="Imagen de sección hamburguesa" className="w-[8vw] h-28 object-cover"/>
          </div>

          <div className="flex flex-col justify-around">
            <h2 className="text-2xl text-white  font-bold text-center max-w-full bg-slate-400 tracking-wider">{name}</h2>
            <p className='font-bold text-2xl'>${price}</p>
          </div>

          
            <div className='flex align-middle h-28 items-center'>
              <div>
                <img src={flechaDerecha} alt="" className='' />
              </div>
            </div>
      
      </section>
    </a>
  )
}

export default CardItem