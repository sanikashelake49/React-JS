 import React from 'react';
 import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import User from './Pages/User';
import Navbar from './Components/Navbar';
import DynamicUser from './Pages/DynamicUser';
import Nav from './Components/Nav';
function App() {
 

  return(
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/user/:id" element={<DynamicUser/>}></Route>
      <Route path="*" element={"Enter correct URl"}></Route>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  )
}


export default App
