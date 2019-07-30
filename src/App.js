import React from 'react';
import logo from './helix.jpg';
import './App.css';

function Navbar() {
  return (
    <div className="App">
        <nav className="flex items-center justify-between bg-blue-500 h-15 w-full p-5">
          <div className="flex items-center w-full">
            <div>
            <img className="h-16 w-20 rounded" src={logo}/>
            </div>
          <div className="ml-10 w-1/3">
            <ul className="flex justify-between">
              <a href="">  
              <li className="text-white text-lg font-medium">
                Inicio
              </li>
              </a>
              <a href="">
              <li className="text-white text-lg font-medium">
                Productos
              </li>
              </a>
              <a href="">
              <li className="text-white text-lg font-medium">
                Carrito
              </li>
              </a>
              <a href="">
              <li className="text-white text-lg font-medium">
                Contactanos
              </li>
              </a>
            </ul>
          </div>
          </div>
          <div className="mr-5">
            <button className="py-2 px-8 text-lg text-white font-medium border-2 border-white rounded">
              Total
            </button>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
