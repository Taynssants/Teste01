// src/services/produtoService.js
import axiosInstance from './axiosInstance';

// Serviço para obter todos os produtos
const getProdutos = () => {
    return axiosInstance.get('/produtos');
};

// Serviço para obter um produto específico por ID
const getProdutoById = (id) => {
    return axiosInstance.get(`/produtos/${id}`);
};

// Serviço para adicionar um novo produto
const addProduto = (produto) => {
    return axiosInstance.post('/produtos', produto);
};

// Serviço para atualizar um produto por ID
const updateProduto = (id, produto) => {
    return axiosInstance.put(`/produtos/${id}`, produto);
};

// Serviço para deletar um produto por ID
const deleteProduto = (id) => {
    return axiosInstance.delete(`/produtos/${id}`);
};

// Exportando todos os serviços
export default {
    getProdutos,
    getProdutoById,
    addProduto,
    updateProduto,
    deleteProduto
};
