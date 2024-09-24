// src/components/Produtos.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import produtoService from '../services/produtoService';
import { adicionarProduto, removerProduto } from '../redux/actions';
import Card from './Card'; // Importando o componente Card

const Produtos = () => {
    const dispatch = useDispatch();
    const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await produtoService.getProdutos(); // Faz a requisição para obter os produtos
                setProdutos(response.data); // Armazena os produtos no estado
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos(); // Chama a função para buscar produtos
    }, []); // O array vazio indica que este useEffect só será executado uma vez

    const handleAdicionar = (produto) => {
        dispatch(adicionarProduto(produto)); // Chama a ação para adicionar o produto
    };

    const handleRemover = (id) => {
        dispatch(removerProduto(id)); // Chama a ação para remover o produto
    };

    return (
        <div className="container">
            <h1>Produtos</h1>
            <div className="row">
                {produtos.map((produto) => (
                    <div className="col-md-4" key={produto.id}>
                        <Card
                            title={produto.nome} // Mudei aqui para 'title'
                            description={`Preço: R$ ${produto.preco.toFixed(2)}, Validade: ${produto.validade}`} // Usando descrição para combinar os dados
                            image={produto.imagemUrl} // Mudei aqui para 'image'
                            onButtonClick={() => handleAdicionar(produto)} // Passando a função para adicionar
                            buttonText="Adicionar" // Texto do botão
                        />
                        <Button
                            variant="danger" // Usando o botão do Bootstrap diretamente aqui
                            onClick={() => handleRemover(produto.id)}
                        >
                            Remover
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;

