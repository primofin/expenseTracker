import React, { useContext} from 'react';
import { Context} from '../context/Context';

export const Balance = () => {
    const {transactions} = useContext(Context);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log('vsdfsad', amounts)
    const total = amounts.reduce((acc, item) => (acc += item),0);

    return (
        <>
            <h3 style={{marginBottom: '5px'}}>Your balance</h3>
            <p style={{fontSize: '40px', marginTop: '5px'}}>{total.toFixed(2)} e</p>
        </>
    )
};

