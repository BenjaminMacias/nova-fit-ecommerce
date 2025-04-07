import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.accent};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #4ceee6;
  }
`;

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dirección:", address);
    console.log("Método de pago:", paymentMethod);

    navigate("/confirmation");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Title>Finalizar Compra</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Dirección de Envío</Label>
          <Input
            type="text"
            placeholder="Calle, número, ciudad, etc."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <Label>Método de Pago</Label>
          <Input
            type="text"
            placeholder="Tarjeta, PayPal, OXXO, etc. (simulado)"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />

          <Button type="submit">Confirmar Compra</Button>
        </Form>
      </Container>
    </motion.div>
  );
}
