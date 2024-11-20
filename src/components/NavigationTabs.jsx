import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthProvider';

const NavigationTabs = () => {
    const {activeNavItem, setActiveNavItem} = useContext(AuthContext)
    // const [activeNavItem, setActiveNavItem] = useState("#top")
    
    const scrollToSection = (sectionId) => {
        setActiveNavItem(sectionId)
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    return (
        <TabsContainer>
            <Tab active={activeNavItem === "#top"} onClick={() => scrollToSection("#top")}>Topo</Tab>
            <Tab active={activeNavItem === "#artesanal"} onClick={() => scrollToSection("#artesanal")}>Hamburger Artesanal</Tab>
            <Tab active={activeNavItem === "#traditional"} onClick={() => scrollToSection("#traditional")}>Lanches Tradicionais</Tab>
            <Tab active={activeNavItem === "#bebidas"} onClick={() => scrollToSection("#bebidas")}>Bebidas</Tab>
            <Tab active={activeNavItem === "#sobremesas"} onClick={() => scrollToSection("#sobremesas")}>Sobremesas</Tab>
        </TabsContainer>
    );
};

const TabsContainer = styled.div`
    background-color: #FFF;
    width: 92%;
    height: 60px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align items to the start */
    gap: 0.6rem;
    margin-top: 1.6rem;
    overflow-x: auto; /* Enable horizontal scrolling */
    overflow-y: hidden; /* Hide vertical scroll */
    white-space: nowrap; /* Prevent wrapping */
     /* Add padding for better scrolling */
    scrollbar-width: none; /* For Firefox, optional */
    scrollbar-color: none;
    /* padding: 0 5%; */

    /* Style scrollbar for Webkit-based browsers (Chrome, Edge, Safari) */
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

const Tab = styled.button`
    background-color: ${({ active }) => (active ? '#66171F' : '#A57679')};
    color: #FFF;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap; /* Ensure tabs don’t wrap */
    &:hover {
        background-color: #722a2e;
        color: white;
    }
`;

export default NavigationTabs;