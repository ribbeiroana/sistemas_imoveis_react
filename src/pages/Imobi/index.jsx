import React, { Fragment } from 'react';
import { Container, Left, Thumb, Description, Right, Profile, ProfileImg, ProfileDescription, ProfileContact, ProfileFormContact } from './style';
import TopBanner from '../../components/TopBanner';

const Imobi = () => {

  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
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
              <input type="text" placeholder="Nome:" />
              <input type="text" placeholder="Email:" />
              <textarea name="" id="" placeholder="Mensagem:" ></textarea>
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;