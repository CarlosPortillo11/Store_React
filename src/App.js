import React from 'react';
import logo from './helix.jpg';
import bar from './background-bar.jpg';
import './App.css';

function Navbar() {
  return (
    <div className="App">
        <nav className="flex items-center justify-between bg-black h-15 w-full py-5 px-10">
          <div className="flex items-center w-full">
            <div>
            <img className="h-20 rounded" src={logo}/>
            </div>
          <div className="ml-10 w-1/3">
            <ul className="flex justify-between">
              <a href="">  
              <li className="text-blue-500 text-xl font-semibold hover:text-pink-500">
                Inicio
              </li>
              </a>
              <a href="">
              <li className="text-pink-500 text-xl font-semibold hover:text-blue-500">
                Productos
              </li>
              </a>
              <a href="">
              <li className="text-blue-500 text-xl font-semibold hover:text-pink-500">
                Carrito
              </li>
              </a>
              <a href="">
              <li className="text-pink-500 text-xl font-semibold hover:text-blue-500">
                Contactanos
              </li>
              </a>
            </ul>
          </div>
          </div>
          <div>
            <button className="py-2 px-8 text-xl text-yellow-400 font-semibold border-2 border-yellow-400 rounded hover:text-pink-500 hover:border-blue-500">
              Total
            </button>
          </div>
        </nav>
      </div>
  );
}

export default Navbar;
