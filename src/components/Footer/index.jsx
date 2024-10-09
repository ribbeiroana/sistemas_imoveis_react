import React, { Fragment } from 'react';
import { Container, Item, Copy } from './style';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import LogoFoto from '../../assets/logo.png'

const Footer = () => {
  return (
<Fragment>
<Container>
       <Item>
       <img src={LogoFoto} alt="logo" />
       <p>Lorem ipsum dolor</p>
       <nav>
        <li><span><FaFacebook size={32} /></span></li>
        <li><span><FaInstagram size={32} /></span></li>
        <li><span><FaWhatsapp size={32} /></span></li>
       </nav>
       </Item>
       <Item>
        <h3>Our Services</h3>
       <ul>
        <li><span>Comprar</span></li>
        <li><span>Alugar</span></li>
        <li><span>Vender</span></li>
        </ul>
       </Item>
       <Item>
        <h3>Useful Links</h3>
       <ul>
        <li><span>Comprar</span></li>
        <li><span>Alugar</span></li>
        <li><span>Vender</span></li>
        </ul>
       </Item>
       <Item>
        <h3>Contact Info</h3>
       <ul>
        <li><span>Comprar</span></li>
        <li><span>Alugar</span></li>
        <li><span>Vender</span></li>
        </ul>
       </Item>
    </Container>
    <Copy>
      <p>© Copyrigth 2024 - Workside Tecnologia All Right Reserved</p>
      <ul>
        <li><span>Termos de uso</span></li>
        <li><span>Política de Privacidade</span></li>
        <li><span>Política de Cookies</span></li>
      </ul>
    </Copy>
</Fragment>
  )
}

export default Footer;

