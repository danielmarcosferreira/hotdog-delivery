import React, { useState } from 'react';
import styled from 'styled-components';

const NavigationTabs = () => {
    const [activeNavItem, setActiveNavItem] = useState("#top")
    function scrollToSection(sectionId) {
        setActiveNavItem(sectionId)
    }

    return (
        <TabsContainer>
            <Tab active={activeNavItem === "#top"} onClick={() => scrollToSection("#top")}>Topo</Tab>
            <Tab active={activeNavItem === "#artesanal"} onClick={() => scrollToSection("#artesanal")}>Hamburger Artesanal</Tab>
            <Tab active={activeNavItem === "#tradicional"} onClick={() => scrollToSection("#tradicional")}>Lanches Tradicionais</Tab>
            <Tab active={activeNavItem === "#bebidas"} onClick={() => scrollToSection("#bebidas")}>Bebidas</Tab>
            <Tab active={activeNavItem === "#sobremesas"} onClick={() => scrollToSection("#sobremesas")}>Sobremesas</Tab>
        </TabsContainer>
    );
};

const TabsContainer = styled.div`
    width: 92%;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start; /* Align items to the start */
    gap: 1rem;
    margin-top: 1.6rem;
    overflow-x: auto; /* Enable horizontal scrolling */
    overflow-y: hidden; /* Hide vertical scroll */
    white-space: nowrap; /* Prevent wrapping */
     /* Add padding for better scrolling */
    scrollbar-width: none; /* For Firefox, optional */
    scrollbar-color: none;

    /* Style scrollbar for Webkit-based browsers (Chrome, Edge, Safari) */
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