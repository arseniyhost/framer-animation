import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic; 
`

const NavItem = styled.div`

`;

const NavbarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
`


const Header = () => {
    return (
        <Navbar>
            <Logo to="/">Match</Logo>
            <NavItem>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/todo">Todo</NavbarLink>
                <NavbarLink to="/crypto">Crypto</NavbarLink>
            </NavItem>
        </Navbar>
    )
}

export default Header
