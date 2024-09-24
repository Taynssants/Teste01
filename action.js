// src/redux/actions.js

// Tipos de ações
export const ADICIONAR_PRODUTO = 'ADICIONAR_PRODUTO';
export const CRIAR_PRODUTO = 'CRIAR_PRODUTO';

// Ações
export const adicionarProduto = (produto) => ({
    type: ADICIONAR_PRODUTO,
    payload: produto,
});

export const criarProduto = (produto) => ({
    type: CRIAR_PRODUTO,
    payload: produto,
});
