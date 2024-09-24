// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Meu App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                <Nav.Link as={Link} to="/cria-produto">Criar Produto</Nav.Link>
                <Nav.Link as={Link} to="/selecionados">Selecionados</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Menu;
