import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/best-logo.png'; // Replace with your logo
import OpeningHours from './Modals/OpeningHours';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const { openToggle, setOpenToggle, setOpenLogin } = useContext(AuthContext)

    function openModalHours() {
        setOpenToggle(true)
        console.log("Entered here");
    }
    
    return (
        <HeaderContainer>
            <TopHeader>
                <img src='https://thumbs.dreamstime.com/z/conjunto-de-aquarelas-para-hamb%C3%BArguer-v%C3%A1rios-hamb%C3%BArgueres-tem%C3%A1ticos-temas-com-diferentes-recheios-246646532.jpg' />
            </TopHeader>
            <GeneralInformation>
                <RestaurantInfo>
                    <Logo src={logo} />
                    <WorkingTime onClick={() => openModalHours()}>
                        <Status closed={true}>Fechado</Status>
                        <span>18:30 - 22:30 <ion-icon name="information-outline"></ion-icon></span>
                    </WorkingTime>
                    <p>Pedido mínimo: <span>R$ 19,00</span></p>
                    <SocialMedia>
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        <span>WhatsApp</span>
                    </SocialMedia>
                </RestaurantInfo>
                <LoginDiv>
                    <button onClick={() => setOpenLogin(true)}>Login</button>
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
    display: flex;
    justify-content: center;
    img {
        width: 500px;
        height: 200px;
    }
`

const GeneralInformation = styled.div`
    width: 92%;
    display: flex;
    padding: 30px 0 20px 0;
`

const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
    cursor: pointer;
    span {
        display: flex;
        line-height: 22px;
        margin: 0 10px;
    }
    ion-icon {
        width: 20px;
        height: 20px;
        background-color: #672E17;
        color: #FFF;
        border-radius: 50%;
        margin-left: 5px;
    }
    &:hover {
        span {
            text-decoration: underline;
        }
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
    span {
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
    width: 92%;
    height: 90px;
    background-color: #512e1f;
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