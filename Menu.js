// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Menu = () => {
    return (
      <Container>
    <NavLink to = {'criaProduto'}> Cria Produto</NavLink>
    <NavLink to = {'produtos'}> Produtos</NavLink>
    <NavLink to= {'app'}> App</NavLink>
        </Container>

export default Menu;
