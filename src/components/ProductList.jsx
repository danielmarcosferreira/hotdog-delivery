import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import lanche from "./../assets/lanche.jpeg"

const ProductList = () => {
    const products = [
        {
            id: 1,
            description: 'A promoção ideal para quem ama hambúrguer artesanal e clássico!',
            title: 'Promoção - 1 Best Monster + 1 Best Classic',
            price: 'R$ 54,90',
            oldPrice: 'R$ 60,50',
            image: "https://www.imparcial.com.br/assets/images/galeria/1556051937.jpg",
            options: [
                {
                    category: "Gostaria de ADICIONAIS",
                    items: [
                        { name: "Potinho Extra - Molho Verde", price: 2.00 },
                        { name: "Adicional - Salada", price: 2.00 },
                        { name: "OVO", price: 2.50 },
                        { name: "PICLES Hemmer", price: 3.00 },
                        { name: "Adicional - Cebola Caramelizada", price: 3.00 },
                        { name: "Adicional - Cheddar", price: 3.00 },
                        { name: "Adicional - Mussarela", price: 3.50 },
                        { name: "Adicional - Bacon", price: 4.00 },
                        { name: "Adicional - Creme de Gorgonzola", price: 4.00 },
                        { name: "Adicional - Carne", price: 8.00 },
                        { name: "Adicional - Carne de PICANHA", price: 14.00 },
                    ],
                },
                {
                    category: "ESCOLHA SEU MOLHO (2)",
                    limit: 2, // Limit of choices
                    items: [
                        { name: "BARBECUE", price: 0.00 },
                        { name: "VERDE", price: 0.00 },
                        { name: "KETCHUP", price: 0.00 },
                    ],
                },
                {
                    category: "Escolha seu SACHÊ (2)",
                    limit: 2, // Limit of choices
                    items: [
                        { name: "Barbecue", price: 0.00 },
                        { name: "Maionese", price: 0.00 },
                        { name: "Ketchup", price: 0.00 },
                        { name: "Mostarda", price: 0.00 },
                    ],
                },
            ]
        },
        {
            id: 2,
            description: 'Pão Brioche + Burger 150g de Linguiça Toscana + Cheddar Fatiado+ Barbecue + BACON + Cebola Roxa + Maionese',
            title: 'Promoção - 2 Best Costela + Coca 2L',
            price: 'R$ 70,00',
            oldPrice: 'R$ 75,00',
            image: "https://opolo.com.br/wp-content/uploads/2024/02/ideias-nomes-para-hamburger-930x620.webp",
            options: [
                {
                    category: "Gostaria de ADICIONAIS",
                    items: [
                        { name: "Potinho Extra - Molho Verde", price: 2.00 },
                        { name: "Adicional - Salada", price: 2.00 },
                        { name: "OVO", price: 2.50 },
                        { name: "PICLES Hemmer", price: 3.00 },
                        { name: "Adicional - Cebola Caramelizada", price: 3.00 },
                        { name: "Adicional - Cheddar", price: 3.00 },
                        { name: "Adicional - Mussarela", price: 3.50 },
                        { name: "Adicional - Bacon", price: 4.00 },
                        { name: "Adicional - Creme de Gorgonzola", price: 4.00 },
                        { name: "Adicional - Carne", price: 8.00 },
                        { name: "Adicional - Carne de PICANHA", price: 14.00 },
                    ],
                },
                {
                    category: "ESCOLHA SEU MOLHO",
                    limit: 2, // Limit of choices
                    items: [
                        { name: "BARBECUE", price: 0.00 },
                        { name: "VERDE", price: 0.00 },
                        { name: "KETCHUP", price: 0.00 },
                    ],
                },
                {
                    category: "Escolha seu SACHÊ",
                    limit: 2, // Limit of choices
                    items: [
                        { name: "Barbecue", price: 0.00 },
                        { name: "Maionese", price: 0.00 },
                        { name: "Ketchup", price: 0.00 },
                        { name: "Mostarda", price: 0.00 },
                    ],
                },
            ]
        },
        {
            id: 3,
            description: 'A combinação perfeita para uma refeição deliciosa e completa!',
            title: 'Promoção - 2 Best Costela + Coca 2L',
            price: 'R$ 70,00',
            oldPrice: 'R$ 75,00',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5De7DyDnbZOoCCgV7vd-OF7eUFvuKMH4rjZAPXsT7SCJK0N-ma-Xl2yLd14_GHna23w&usqp=CAU",
        },

    ];

    return (
        <ListContainer>
            <DivName>
                <h1>Hamburguer Artesanal</h1>
            </DivName>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <DivName>
                <h1>Lanches Tradicional</h1>
            </DivName>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <DivName>
                <h1>Bebidas</h1>
            </DivName>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

            <DivName>
                <h1>Sobremesas</h1>
            </DivName>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ListContainer>
    );
};

const ListContainer = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* padding: 1rem; */
`;

const DivName = styled.div`
    background-color: #66171F;
    height: 50px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: #FFF;
        font-size: 24px;
        font-weight: bold;
    }
`

export default ProductList;