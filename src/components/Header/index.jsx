import React from 'react';
import LogoFoto from '../../assets/logo.png'
import { Container, Logo, Menu } from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
       <Logo>
        <Link to='/'><img src={LogoFoto} alt="logo" /></Link> 
       </Logo>
       <Menu>
        <ul>
          <li><Link to="/login"><span>Cadastro/Login</span></Link></li>
        </ul>
       </Menu>
    </Container>
  )
}

export default Header;

