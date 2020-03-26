import React from 'react';
import './App.css'



const MenuItem=({name, pic, des, price, quantity, Increment, Decrement}) =>(
    
    
    <div className='row mt-5 mb-5 border border-danger p-4 text-center'>
        <div className='col-sm-3'>
            <img src={pic} alt='' className='pic'></img>
        </div>
        
        <div className='col-sm-3'>
            <h1>{name}</h1>
        </div>
        <div className='col-sm-2'>
            <p>{des}</p>
        </div>
        <div className='col-sm-2'>
            <h1>{price}</h1>
        </div>
        <div className='col-sm-2'>
            <button onClick={Increment}>+</button> <p>{quantity} </p> <button onClick={Decrement}>-</button>
        </div>
    </div>
    
    
    
)

export default MenuItem