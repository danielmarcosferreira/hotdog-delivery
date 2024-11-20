import React, { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const { openLogin, setOpenLogin } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, whatsapp });
    };

    return (
        <>
            {openLogin && (
                <ModalOverlay onClick={() => setOpenLogin(false)}>
                    <FormContainer>
                        <Header>
                            <Title>Login (somente na primeira vez)</Title>
                            <CloseButton onClick={() => setOpenLogin(false)}>&times;</CloseButton>
                        </Header>
                        <Form onSubmit={handleSubmit}>
                            <Label>
                                Nome:
                                <Input
                                    type="text"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Label>
                            <Label>
                                Seu WhatsApp (somente dígitos)
                                <Input
                                    type="text"
                                    placeholder="(xx) xxxxx-xxxx"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                />
                            </Label>
                            <SubmitButton type="submit">Começar</SubmitButton>
                        </Form>
                    </FormContainer>
                </ModalOverlay>
            )}
        </>
    );
};

export default Login;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* Dark semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background: #fff;
  width: 95%;
  max-width: 600px;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.h2`
    color: #222;
    font-size: 1.2rem;
    font-weight: light;
    margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #2c3d4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #1d2f42;
  }
`;