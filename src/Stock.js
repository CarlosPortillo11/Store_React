import React from 'react';
import producto from './helix.jpg';
import './App.css';

const initialProducts = [
    { id: 1, title: 'iPhone Xs', inventory: 4, price: 1200 },
    { id: 2, title: 'Galaxy S9', inventory: 5, price: 999 },
    { id: 3, title: 'Huawei Mate', inventory: 2, price: 900 },
    { id: 4, title: 'Google Pixel 3', inventory: 3, price: 950 },
    { id: 5, title: 'Motorola G6', inventory: 6, price: 800 },
  ];

  const Product = ({title, price, inventory}) =>
(
    <div className="border-2 border-yellow-400 rounded mx-5 my-8 w-2/5 h-auto">
        <div className="px-6 flex">
            <div className="my-8 border-4 rounded border-pink-500">
                <img src={producto} className="h-40 rounded"/>
            </div>
            <div className="border-2 border-blue-500 rounded ml-6 w-2/3 my-3 py-2">
                <div className="flex justify-center">
                    <p className="text-yellow-500 font-sans text-2xl font-medium tracking-wide">
                        {title}
                    </p>
                </div>
                <div className="flex justify-center">
                    <p className="text-pink-500 font-sans text-xl font-semibold tracking-widest">
                        ${price}
                    </p>
                </div>
                <div className="mt-6 px-6 flex justify-around">
                    <button className="bg-yellow-500 rounded text-lg font-bold text-white w-1/4 py-3">
                        +
                    </button>
                    <button className="bg-blue-500 rounded text-lg font-bold text-white w-1/4 py-3">
                        -
                    </button>
                    <button className="bg-pink-500 rounded text-lg font-bold text-white w-1/4 py-3">
                        /
                    </button>
                </div>
                <div className="mt-3 ml-8">
                    <p className="text-pink-500 font-sans text-base  font-medium tracking-wide">
                        En stock: {inventory}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Product;