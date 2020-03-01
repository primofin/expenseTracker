import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction} =useContext(Context);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        setAmount('');
        setText('');
        addTransaction(newTransaction);
    }
  
    return (
        <div>
            <h3 style={{margin: '15px 0'}}>Add new transaction</h3>
            <hr/>
            <form onSubmit={onSubmit}>
                <label htmlFor="transName" style={{fontSize: '1.2em'}}>Text</label><br/>
                <input 
                    id="transName"
                    type="text"  
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    placeholder="Enter text..."
                    style={ {fontSize:'1.2em'}}
                    >
                </input>
                <br/>
                <label htmlFor="transAmount" style={{fontSize: '1.2em'}}>Amount<p style={{margin: '7px 0', fontSize:'0.6em'}}>(negative-expense, positive-income)</p></label>
                <input 
                    id="transAmount"
                    type="number"  
                    name="transAmount" 
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    style={ {fontSize:'1.2em'}}
                    />
                <br/>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </div>
    )
}
