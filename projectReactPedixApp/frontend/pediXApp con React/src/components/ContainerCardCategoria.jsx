import CardItemCategoria from './CardItemCategoria';

import burger from '../images/burgerSola.jpg'
import lomos from '../images/lomoConPapas.jpg'


function ContainerCards() {
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <section className='w-100% bg-green-200 h-[80vh] -m-20'>
          <h1 className='mb-2 text-3xl text-[#898989] font-bold ml-4 mt-4 bg-green-400'>Categorías</h1>
          <div className="grid grid-cols-3 overflow-hidden w-auto gap-4 ml-4 mr-4 bg-yellow-600">
            <CardItemCategoria name={"Hamburguesa"} imagenUrl={burger}/>
            <CardItemCategoria name={"Lomos"} imagenUrl={lomos}/>
            <CardItemCategoria name={"Sandwich de Mila"} imagenUrl={burger}/>
          </div>
          {/* <div className="grid grid-cols-3 overflow-hidden w-auto gap-4 ml-4 mr-4 mt-4 bg-yellow-600">
            <CardItemCategoria name={"Extras"} imagenUrl={burger}/>
            <CardItemCategoria name={"Aguas Saborizadas"} imagenUrl={burger}/>
            <CardItemCategoria name={"Gaseosas"} imagenUrl={burger}/>
          </div>
          <div className="grid grid-cols-3 overflow-hidden w-auto gap-4 ml-4 mr-4 mt-4 bg-yellow-600">
            <CardItemCategoria name={"Cervezas"} imagenUrl={burger}/>
          </div> */}
        </section>
      </section>
    </>
  )
}

export default ContainerCards