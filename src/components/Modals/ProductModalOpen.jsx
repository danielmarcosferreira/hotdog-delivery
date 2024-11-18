import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthProvider';

const ModalProductOpen = () => {
    // const { isModalOpen, setIsModalOpen, component, setComponent } = useContext(AuthContext)

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
                                <span><ion-icon name="alert-circle-outline"></ion-icon> Estabeleciamento Fehado</span>
                            </OpeningHours>


                            <CloseButton onClick={closeModal}>&times;</CloseButton>
                        </ModalHeader>
                        <ModalContent>
                            <h2>{component.title}</h2>
                            <ModalHeaderDescription>

                            </ModalHeaderDescription>
                            <p>This is the content of the modal!</p>
                            <Button onClick={closeModal}>Close</Button>
                        </ModalContent>
                    </ModalContainer>
                </>
            )}
        </div>
    );
};

export default ModalProductOpen;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

const OpeningHours = styled.div`

`

const ModalHeaderDescription = styled.div`

`

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const ModalContent = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;