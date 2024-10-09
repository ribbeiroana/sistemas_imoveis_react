import React from 'react';
import { Container, ContainerForm, Form, Label } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';


const Login = () => {
  return (
    <Container>
      <h2>Acesse sua conta:</h2>
      <p>Entre com seu email e senha:</p>
      <ContainerForm>
        <Form>
          <Label>Email:</Label>
          <Input type="text" placeholder="Informe seu email" />
          <Label>Senha</Label>
          <Input type="text" placeholder="Informe sua senha" />
          <Button>Fazer login</Button>
        </Form>
      </ContainerForm>
    </Container>
  )
}

export default Login;