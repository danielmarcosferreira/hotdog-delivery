import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthProvider';

const ProductCard = ({ product }) => {
    const { title, price, oldPrice, image, description } = product;
    const { isModalOpen, setIsModalOpen } = useContext(AuthContext)
    const { component, setComponent } = useContext(AuthContext)

    function openNewModal(produ) {
        setComponent(produ)
        setIsModalOpen(true)
        console.log(produ)
    }

    return (
        <Card onClick={() => openNewModal(product)}>
            <img src={image} alt={title} />
            <Details>
                <h2>{title}</h2>
                <h3>{description}</h3>
                <PriceContainer>
                    <div>
                        <OldPrice>{oldPrice}</OldPrice>
                        <Price>{price}</Price>
                    </div>
                    <Button>Pedir</Button>
                </PriceContainer>
            </Details>
        </Card>
    );
};

const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    box-shadow: 1px 4px 31px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    height: 150px;
    cursor: pointer;

    img {
        width: 100px;
        height: 120px;
        border-radius: 5px;
        margin-left: 5px;
    }
`;

const Details = styled.div`
    /* padding: 1rem; */
    padding: 0 10px;
    height: 125px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 1.0rem;
        color: #874000;
    }

    h3{
        color: #909090;
        font-size: 0.9rem;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
`;

const OldPrice = styled.span`
    font-size: 13px;
    color: red;
    text-decoration: line-through;
    margin-right: 5px;
`;

const Price = styled.span`
    color: #333;
    font-size: 13px;
    font-weight: bold;
`;

const Button = styled.button`
    background-color: #874000;
    color: white;
    padding: 0.3rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #633000;
    }
`;

export default ProductCard;