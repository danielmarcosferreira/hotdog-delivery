import React from 'react';
import styled from 'styled-components';

const ProductDetails = ({ product }) => {
    return (
        <Container>
            <Image src={product.image} alt={product.title} />
            <Info>
                <Title>{product.title}</Title>
                <Description>{product.description}</Description>
                <PriceContainer>
                    <OldPrice>{product.oldPrice}</OldPrice>
                    <Price>{product.price}</Price>
                </PriceContainer>
                <Options>
                    {product.options.map((option, index) => (
                        <OptionCategory key={index}>
                            <OptionTitle><ion-icon name="list-outline"></ion-icon>{option.category}</OptionTitle>
                            <OptionItems>
                                {option.items.map((item, idx) => (
                                    <OptionItem key={idx}>
                                        <OptionName>{item.name}</OptionName>
                                        <OptionPrice>
                                            {item.price > 0
                                                ? `R$ ${item.price.toFixed(2)}`
                                                : "Grátis"}
                                        </OptionPrice>
                                    </OptionItem>
                                ))}
                            </OptionItems>
                        </OptionCategory>
                    ))}
                </Options>
            </Info>
        </Container>
    );
};

export default ProductDetails;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem auto;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    margin: 0 auto;
    width: 70%;
    border-radius: 8px;
`;

const Info = styled.div`
    margin-top: 1rem;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    margin: 0.5rem 0;
`;

const Description = styled.p`
    font-size: 10px;
    color: #666;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
`;

const OldPrice = styled.span`
    font-size: 14px;
    color: #aaa;
    text-decoration: line-through;
    margin-right: 0.5rem;
`;

const Price = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #d32f2f;
`;

const Options = styled.div`
    margin-top: 1rem;
`;

const OptionCategory = styled.div`
    margin-top: 1rem;
`;

const OptionTitle = styled.h3`
    font-size: 1.1rem;
    color: #333;
    display: flex;
    align-items: center;
    font-weight: bold;
    ion-icon {
        font-size: 1.5rem;
        margin-right: 5px;
    }
`;

const OptionItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const OptionItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
`;

const OptionName = styled.span`
    font-size: 1rem;
    color: #555;
`;

const OptionPrice = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
`;