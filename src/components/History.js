import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import {Context} from '../context/Context';

export const History = () => {
    const {transactions} = useContext(Context);
    console.log(transactions)

    return (
        <>
        <h3 style={{marginBottom: '15px'}}>History</h3>
        <hr/>
        <ul className="list-container">
             {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
        </>
    )
};
