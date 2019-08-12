import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './App';
import Stock from './Stock';
import * as serviceWorker from './serviceWorker';
import Product from './Stock';

const initialProducts = [
    { id: 1, title: 'iPhone Xs', inventory: 4, price: 1200 },
    { id: 2, title: 'Galaxy S9', inventory: 5, price: 999 },
    { id: 3, title: 'Huawei Mate', inventory: 2, price: 900 },
    { id: 4, title: 'Google Pixel 3', inventory: 3, price: 950 },
    { id: 5, title: 'Motorola G6', inventory: 6, price: 800 },
  ];

ReactDOM.render(
    <div>
    <Navbar/>
        <div className="flex flex-wrap justify-center t-5 bg-black">
            {initialProducts.map(prod =>
                    <Product
                        title = {prod.title}
                        price = {prod.price}
                        inventory = {prod.inventory}
                    />
                )
            }
        </div>
    </div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
