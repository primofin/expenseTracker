import React, {useContext} from 'react';
import {Context} from '../context/Context';


export const Transaction = ({transaction}) => {
    const { deleteTransaction} =useContext(Context);
    const sign = transaction.amount < 0 ? '-' : '+';
    console.log(transaction)
    return (
        <li className="transContainer">
            <p className='transName'>{transaction.text}</p> 
            <p>{sign} ${Math.abs(transaction.amount)}</p>  
            
            <button onClick={()=> deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}
