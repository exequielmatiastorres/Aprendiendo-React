import React from 'react'
import { Link } from 'react-router-dom'
import logoBurger from '../assets/images/menu-burger.png'
import logoMarca from '../assets/images/logoMarca.jpg'
import lupa from '../assets/images/iconsSearch.png'

function Header() {
  return (
    <>
      <header>

        <section className='max-w-screen h-14 bg-[#c90000] flex justify-between items-center pl-6'>
          <section className='flex items-center'>

            <div className='overflow-hidden'>
              <img src={logoBurger} alt="menu Hamburguesa" className='w-10' />
            </div>

            <div className='overflow-hidden pl-4'>
              <img src={logoMarca} alt="Logotipo de Marca" className='w-30 h-10'/>
            </div>
          </section>

          <section className='pr-3'>
            <img src={lupa} alt="icono de busqueda" className='w-8 h-8' />
          </section>
        </section>

        <section className='max-w-screen h-20 bg-[#ffd082]'>
          <div className='pt-4'>
            <h3 className='text-center text-lg font-bold text-[#21243d]'>😴En este momento estamos cerrados</h3>
            <p className='text-center text-base text-[#21243d]'>Hacé click para consultar nuestros horarios</p>
          </div>
        </section>

        <section className='bg-[#000] max-w-screen h-28'>

        </section>

      </header>
    </>
  )
}

export default Header;


/*rompecabezas: 

<div className="grid grid-cols-3">
      
        <CardCategoria name={"Hamburguesa"} imageUrl={"./assets/images/burgerSola.jpg"}/>
        
        <CardCategoria name={"Lomos"} imageUrl={"./assets/images/burgerSola.jpg"}/>
        
        <CardCategoria name={"Sandwich de Milanesa"} imageUrl={"./assets/images/burgerSola.jpg"}/>
      
      </div>

*/