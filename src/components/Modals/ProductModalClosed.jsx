import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthProvider';

const ModalProductClosed = () => {
  const { isModalOpen, setIsModalOpen, component, setComponent } = useContext(AuthContext)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <>
          <ModalOverlay onClick={closeModal} />
          <ModalContainer>
            <ModalHeader>
              <OpeningHours>
                <p><ion-icon name="alert-circle-outline"></ion-icon>Estabeleciamento Fehado</p>
                <p><ion-icon name="time-outline"></ion-icon>Horário hoje: <span>18:30 - 22:30</span></p>
              </OpeningHours>
              <CloseButton onClick={closeModal}>Ok!</CloseButton>
            </ModalHeader>
            <ModalContent>
              <ModalHeaderDescription>
                <img src={component.image} />
                <ModalItemDescription>
                  <h2>{component.title}</h2>
                  <h3>{component.description}</h3>
                </ModalItemDescription>
              </ModalHeaderDescription>
              <AdditionalItems>

              </AdditionalItems>
              <p>This is the content of the modal!</p>
              <Button onClick={closeModal}>Close</Button>
            </ModalContent>
          </ModalContainer>
        </>
      )}
    </div>
  );
};

export default ModalProductClosed;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
`

const ModalContainer = styled.div`
    position: fixed;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 600px;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #222;
`;

const OpeningHours = styled.div`
  p {
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    ion-icon {
      margin-right: 5px;
      font-size: 17px;
    }
  }
  p:nth-child(1) {
    color: red;
    margin-bottom: 5px;
    ion-icon {
      color: red;
    }
  }
`

const CloseButton = styled.button`
  height: 40px;
  width: 50px;
  background-color: #2C3D4F;
  color: #FFF;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #1d2f42;
  }
`;

const ModalContent = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const ModalHeaderDescription = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  margin: 1rem 0 1.8rem 0;
  img {
    width: 100px;
    height: 100px;
    margin: 8px 15px 8px 8px;
    border-radius: 5px;
  }
`

const ModalItemDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  margin-top: 20px;
  h2 {
    color: black;
    margin: 0;
    font-size: 1.3rem;
    margin-bottom: 7px;
  }
  h3 {
    color: #333;
    font-size: 17px;
  }
`

const AdditionalItems = styled.div`

`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;