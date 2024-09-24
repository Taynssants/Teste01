// src/redux/reducers.js
import { ADICIONAR_PRODUTO, CRIAR_PRODUTO } from './actions';

// Estado inicial
const initialState = {
    listaDeProdutos: []
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADICIONAR_PRODUTO:
            return {
                ...state,
                listaDeProdutos: [...state.listaDeProdutos, action.payload],
            };
        case CRIAR_PRODUTO:
            return {
                ...state,
                listaDeProdutos: [...state.listaDeProdutos, action.payload],
            };
        default:
            return state;
    }
};

export default reducer;
