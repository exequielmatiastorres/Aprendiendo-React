import Header from './layout/Header'
import ContainerCardCategoria from './components/ContainerCardCategoria'
import TestPadre from './components/TestPadre';
import TestHijo from './components/TestHijo';
import { StrictMode } from 'react';
import { Link } from 'react-router-dom';
import CardItem from './components/CardItemaComprar';

//importamos imagenes
import CardItemCategoria from './components/CardItemCategoria';

function App() {
  
  return (
    <>
      <Header />
      {/* <ContainerCardCategoria/> */}
      <CardItem name={"Lomo Simple"} price={"15.000"}/>
      <CardItem name={"Lomo Simple"} price={"15.000"}/>
      
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