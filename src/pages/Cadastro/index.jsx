import React from 'react';
import { Container, ContainerForm, Form, Label } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';


const Cadastro = () => {
  return (
    <Container>
      <h2>Crie sua conta:</h2>
      <p>Cadastre para acessar a plataforma:</p>
      <ContainerForm>
        <Form>
        <Label>Nome:</Label>
        <Input type="text" placeholder="Informe seu nome" />
          <Label>Email:</Label>
          <Input type="text" placeholder="Informe seu email" />
          <Label>Senha</Label>
          <Input type="text" placeholder="Informe sua senha" />
          <Button>Cadastrar</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Cadastro;