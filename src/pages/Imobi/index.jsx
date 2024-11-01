import React, { Fragment } from 'react';
import { Container, Left, Thumb, Description, Right, Profile, ProfileImg, ProfileDescription, ProfileContact, ProfileFormContact } from './style';
import TopBanner from '../../components/TopBanner';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';




const Imobi = () => {

  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam at magnam iure, debitis maxime hic magni consequuntur in eveniet molestiae quae quia nulla voluptatum nihil tempora ab, ratione error?</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon</h3>
              <p>Descrição do usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato</h3>
            <p>(11) 1111-1111</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
              <Input placeholder="Nome:"/>
              <Input placeholder="Email:" />
              <Textarea placeholder="Mensagem:"/>
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;