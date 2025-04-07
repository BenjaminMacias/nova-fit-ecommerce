import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { motion } from "framer-motion"; 

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2.5rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.light};
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: #4ceee6;
  }
`;

export default function Confirmation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Title>¡Gracias por tu compra! 🎉</Title>
        <Message>
          Tu pedido ha sido procesado exitosamente.  
          Pronto recibirás la confirmación en tu correo electrónico.
        </Message>
        <HomeButton to="/">Volver al inicio</HomeButton>
      </Container>
    </motion.div>
  );
}
