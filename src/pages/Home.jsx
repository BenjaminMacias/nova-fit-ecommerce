import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.accent};
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  margin: 0 1rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4ceee6;
  }
`;

export default function Home() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProductCard>
              <ProductImage src={product.image} alt={product.name} />
              <ProductDetails>
                <Title>{product.name}</Title>
                <Price>${product.price}</Price>
                <Description>{product.description}</Description>
              </ProductDetails>
              <Button onClick={() => dispatch(addToCart(product))}>
                Agregar al carrito
              </Button>
            </ProductCard>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
}
