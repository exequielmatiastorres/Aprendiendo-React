import CardCategoria from "./components/CardCategoria"




function App() {
  
  return (
    <>
      
      <div className="grid grid-cols-3">
      
        <CardCategoria name={"Hamburguesa"} imageUrl={"./assets/images/burgerSola.jpg"}/>
        
        <CardCategoria name={"Lomos"} imageUrl={"./assets/images/burgerSola.jpg"}/>
        
        <CardCategoria name={"Sandwich de Milanesa"} imageUrl={"./assets/images/burgerSola.jpg"}/>
      
      </div>
      
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

*/