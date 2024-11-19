import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthProvider';

const RestaurantInfoModal = ({
    name,
    address,
    deliveryTime,
    counterTime,
    operatingHours,
    paymentMethods
}) => {
    const { openToggle, setOpenToggle } = useContext(AuthContext);

    const closeModalHours = () => {
        setOpenToggle(false);
    };

    return (
        <>
            {openToggle && (
                <>
                    <ModalOverlay onClick={closeModalHours} />
                    <ModalContainer>
                        <ModalHeader>
                            <h1>{name}</h1>
                            <CloseButton onClick={closeModalHours}>X</CloseButton>
                        </ModalHeader>
                        <Content>
                            <Address>{address}</Address>
                            <TimeInfo>Tempo médio delivery: {deliveryTime}</TimeInfo>
                            <TimeInfo2>Tempo médio balcão: {counterTime}</TimeInfo2>
                            <FullWidthBorder></FullWidthBorder>
                            <Section>
                                <SectionTitle>
                                    <Icon>🕒</Icon>
                                    Horários de Funcionamento
                                </SectionTitle>
                                <HoursList>
                                    {Object.entries(operatingHours).map(([day, hours]) => (
                                        <Day key={day}>
                                            <DayName>{day}</DayName>
                                            <Hours>{hours}</Hours>
                                        </Day>
                                    ))}
                                </HoursList>
                            </Section>
                            <Section>
                                <SectionTitle>
                                    <Icon>💵</Icon>
                                    Métodos de Pagamento
                                </SectionTitle>
                                <PaymentList>
                                    {paymentMethods.map((method, index) => (
                                        <PaymentItem key={index}>{method}</PaymentItem>
                                    ))}
                                </PaymentList>
                            </Section>
                        </Content>
                    </ModalContainer>
                </>
            )}
        </>
    );
};

// Styled Components
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1000;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-bottom: 1rem; */
    /* margin-bottom: 1rem; */

    h1 {
        font-size: 22px;
        font-weight: bold;
        color: #212529;
    }
`;

const CloseButton = styled.button`
    background: none;
    font-size: 1rem;
    cursor: pointer;
    color: #333;
    border: 1px solid black;
    border-radius: 20px;
    padding: 3px 10px;
    &:hover {
        color: #ff0000;
    }
`;

const Content = styled.div`
    position: relative;
`;

const Address = styled.p`
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #555;
`;

const TimeInfo = styled.p`
    font-size: 0.9rem;
    color: #555;
    margin: 0.5rem 0;
`;

const TimeInfo2 = styled.p`
    font-size: 0.9rem;
    color: #555;
    margin: 0.5rem 0;
    padding-bottom: 15px;
`;

const FullWidthBorder = styled.div`
    position: relative;
    /* bottom: 0; */
    left: 0;
    width: 100%; /* Full screen width */
    height: 2px; /* Border thickness */
    background-color: #ddd; /* Border color */
    z-index: 1000; /* Place it above other elements but behind the modal */
`;


const Section = styled.div`
    margin-bottom: 1.5rem;
    padding-top: 15px;
    width: 70%;
    
`;

const SectionTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
    color: #874000;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Icon = styled.span`
    margin-right: 0.5rem;
`;

const HoursList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Day = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;
    /* border-bottom: 1px solid #eee; */
`;

const DayName = styled.span`
    color: #212529;
    font-weight: bold;
`;

const Hours = styled.span`
    color: #555;
`;

const PaymentList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const PaymentItem = styled.li`
    padding: 0.3rem 0;
    color: #555;
`;

// Example Usage
const OpeningHours = () => {
    const { setOpenToggle } = useContext(AuthContext);

    const openModalHours = () => {
        setOpenToggle(true);
    };

    const restaurantData = {
        name: "Best Burger",
        address: "Rua Sebastião Antunes, 2 - Vila, Bananal / SP",
        deliveryTime: "25 - 45 minutos",
        counterTime: "25 - 45 minutos",
        operatingHours: {
            Domingo: "18:30 - 22:30",
            Segunda: "Fechado",
            Terça: "Fechado",
            Quarta: "18:30 - 22:30",
            Quinta: "18:45 - 22:30",
            Sexta: "18:30 - 22:30",
            Sábado: "Fechado",
        },
        paymentMethods: [
            "Dinheiro",
            "PIX (chave exibida após o envio)",
            "Cartão de Débito - Maquininha",
            "Cartão de Crédito - Maquininha",
        ],
    };

    return (
        <>
            <button onClick={openModalHours}>Open Restaurant Info</button>
            <RestaurantInfoModal {...restaurantData} />
        </>
    );
};

export default OpeningHours;