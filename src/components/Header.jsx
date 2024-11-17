import React from 'react';
import styled from 'styled-components';
import logo from '../assets/best-logo.png'; // Replace with your logo

const Header = () => {
    return (
        <HeaderContainer>
            <TopHeader>
                <img />
            </TopHeader>
            <GeneralInformation>
                <RestaurantInfo>
                    <Logo src={logo} />
                    <WorkingTime>
                        <Status closed={true}>Fechado</Status>
                        <span>18:30 - 22:30</span>
                        <ion-icon name="information-outline"></ion-icon>
                    </WorkingTime>
                    <p>Pedido mínimo: R$ 19,00</p>
                    <SocialMedia>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <p>WhatsApp</p>
                    </SocialMedia>
                </RestaurantInfo>
                <LoginDiv>
                    <button>Login</button>
                    <span><ion-icon name="star"></ion-icon>(5.0)</span>
                </LoginDiv>
            </GeneralInformation>
            <ApresentationDiv>
                <p>Seja muito bem vindo a BEST BURGER <br></br>
                    O melhor lanche da região!</p>
            </ApresentationDiv>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    position: relative;
    line-height: 15px;
`;

const TopHeader = styled.div`
    background-color: #672E17;
    height: 200px;
    width: 100%;
`

const GeneralInformation = styled.div`
    width: 85%;
    display: flex;
    padding: 50px 0;
`

const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
        font-size: 1.5rem;
        margin: 0;
    }
    p {
        margin: 0.5rem 0;
    }

`;

const Logo = styled.img`
    width: 80px;
    position: absolute;
    top: 155px;
`

const WorkingTime = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    align-content: center;
    span {
        margin: 0 10px;
    }
    ion-icon {
        width: 20px;
        height: 20px;
        background-color: #672E17;
        color: #FFF;
        border-radius: 50%;
        cursor: pointer;
    }
`

const Status = styled.p`
    background-color: ${({ closed }) => (closed ? 'red' : 'green')};
    align-content: center;
    width: 70px;
    color: white;
    /* padding: 0.25rem 0.5rem; */
    border-radius: 5px;
    font-size: 0.9rem;
    text-align: center;
    height: 20px;
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    ion-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        color: #672E17;
    }
    p {
        &:hover {
            text-decoration: underline;
        }
    }
`

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        background-color: #3f556b;
        color: #FFF;
        width: 60px;
        height: 25px;
        border: none;
        &:hover {
            background-color: #2C3D4F;
        }
    }
    span {
        margin-top: 10px;
        display: flex;
        align-items: center;
        ion-icon {
            color: #672E17;
            margin-right: 2px;
            cursor: pointer;
        }
    }
`

const ApresentationDiv = styled.div`
    width: 85%;
    height: 100px;
    background-color: #672E17;
    border-radius: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: start;
    p {
        color: #FFF;
        margin-left: 20px;
        line-height: 25px;
    }
`

export default Header;