import React, { useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20}
    ]
};

const Context = React.createContext(initialState);

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch ({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    };

    const addTransaction = (transaction) => {
        dispatch ({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    return (
        <Context.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};