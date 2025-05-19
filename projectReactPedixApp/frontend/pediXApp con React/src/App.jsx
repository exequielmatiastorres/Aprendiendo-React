import Header from './layout/Header'
import ContainerCardCategoria from './components/ContainerCardCategoria'
import TestPadre from './components/TestPadre';
import TestHijo from './components/TestHijo';
import { StrictMode } from 'react';
import { Link } from 'react-router-dom';

//importamos imagenes
import burger from './images/burgerSola.jpg'
import CardItemCategoria from './components/CardItemCategoria';

function App() {
  
  return (
    <>
      <Header />
      <ContainerCardCategoria/>
      {/* <CardItemCategoria name={"Hamburguesa"} imagenUrl={burger}/> */}
    </>
  )
}

export default App;


/*

import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal />}>

        </Route>

      </Routes>

    </BrowserRouter>



    <Header />
      <ContainerCardCategoria />

*/