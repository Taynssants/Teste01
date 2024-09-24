// src/components/Selecionados.js
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card'; // Importando o componente Card

const Selecionados = () => {
    // Obtendo a lista de produtos selecionados do estado global
    const listaDeProdutos = useSelector((state) => state.listaDeProdutos);

    return (
        <div className="container">
            <h1>Produtos Selecionados</h1>
            <div className="row">
                {listaDeProdutos.map((produto) => (  // Aqui está o uso do map
                    <div className="col-md-4" key={produto.id}>
                        <Card
                            title={produto.nome} // Nome do produto
                            description={`Preço: R$ ${produto.preco.toFixed(2)}, Validade: ${produto.validade}`} // Descrição formatada
                            image={produto.imagemUrl} // URL da imagem
                            onButtonClick={() => console.log(`Ação para ${produto.nome}`)} // Placeholder para a ação do botão
                            buttonText="Remover" // Texto do botão, se necessário
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selecionados;
