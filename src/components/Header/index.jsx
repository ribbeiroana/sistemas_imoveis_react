import React from 'react';
import LogoFoto from '../../assets/logo.png'
import { Container, Logo, Menu } from './style';

const Header = () => {
  return (
    <Container>
       <Logo>
        <img src={LogoFoto} alt="" />
       </Logo>
       <Menu>
        <ul>
          <li><span>Cadastro/Login</span></li>
        </ul>
       </Menu>
    </Container>
  )
}

export default Header;

