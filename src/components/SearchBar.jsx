import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <SearchContainer>
            <ion-icon name="search-outline"></ion-icon>
            <StyledInput type="text" placeholder={`Digite para buscar um item`} />
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    width: 92%;
    display: flex;
    justify-content: center;
    margin: 10px 1rem;
    position: relative;
    ion-icon {
        font-size: 25px;
        font-weight: bolder;
        position: absolute;
        left: 10px;
        top: 10px;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 0.75rem 2.4rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
`

export default SearchBar;