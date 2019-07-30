import React from 'react';
import product from './helix.jpg';
import './App.css';

function Stock (){

    const initialProducts = [
        { id: 1, title: 'iPhone Xs', inventory: 4, price: 1200 },
        { id: 2, title: 'Galaxy S9', inventory: 5, price: 999 },
        { id: 3, title: 'Huawei Mate', inventory: 2, price: 900 },
        { id: 4, title: 'Google Pixel 3', inventory: 3, price: 950 },
        { id: 5, title: 'Motorola G6', inventory: 6, price: 800 },
      ];

      const Products = initialProducts.map(prod => <p className="text-black font-medium text-xl">{prod.title}</p>);

    return(
        <div className="cont flex justify-center h-screen bg-white">
            <div className="mt-5">
                <div className="mt-10 flex items-center flex-col">
                    <div className="flex items-center flex-col">
                        <div>
                            {Products.price}
                        </div>
                        <div className="mt-5">
                            <img className="h-24 w-24 border border-black rounded" src={product}/>
                        </div>
                        <div className="mt-3 w-32 py-1 bg-blue-400 border-2 border-black rounded">
                            <p className="text-lg font-medium text-white text-center">
                                $700
                            </p>
                        </div>
                        <div className="flex mt-5">
                            <div>   
                                <button className="w-16 bg-red-600 border border-white rounded  px-2 py-1 text-2xl font-bold text-white hover:shadow-xl">
                                    -
                                </button>
                            </div>
                            <div className="ml-2">
                                <button className="w-16 bg-blue-400 border border-white rounded px-2 py-1 text-2xl font-bold text-white hover:shadow-xl">
                                    +   
                                </button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stock;