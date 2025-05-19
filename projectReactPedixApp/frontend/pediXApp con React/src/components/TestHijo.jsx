import burger from '../images/burgerSola.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

function TestHijo({imageUrl}) {
  return (
    <>
      
        <div 
            className={`w-72 h-32 rounded-2xl m-4 ml-8 mr-8 border-2 border-red-400`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
        </div>


        <div></div>
        <img src={burger} alt="" className='w-72 h-32'/>
       
     
    </>
  )
}

export default TestHijo


/*
flex justify-center items-center h-32 
text-2xl text-white max-w-sm font-bold 

<section className="w-72 h-32">
            <div className="w-72 h-32">
                {/* <h2 className="" >{name}</h2> }
            </div>
            </section>

*/