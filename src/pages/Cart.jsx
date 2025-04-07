import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CartItem = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ItemName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`;

const Quantity = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.light};
`;

const Price = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.accent};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.danger};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const ClearButton = styled(Button)`
  background-color: #ff7b7b;
  margin-top: 1rem;
`;

const CheckoutButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.primary};
  margin-top: 1rem;
  margin-left: 1rem;

  &:hover {
    background-color: #4ceee6;
  }
`;

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Title>Carrito de Compras</Title>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito 😢</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CartItem>
                  <ItemInfo>
                    <ItemImage src={item.image} alt={item.name} />
                    <div>
                      <ItemName>{item.name}</ItemName>
                      <Quantity>Cantidad: {item.quantity}</Quantity>
                      <Price>${item.price * item.quantity}</Price>
                    </div>
                  </ItemInfo>
                  <Button onClick={() => dispatch(removeFromCart(item.id))}>
                    Eliminar
                  </Button>
                </CartItem>
              </motion.div>
            ))}

            <div style={{ display: "flex", gap: "1rem" }}>
              <ClearButton onClick={() => dispatch(clearCart())}>
                Vaciar carrito
              </ClearButton>

              <CheckoutButton onClick={() => navigate("/checkout")}>
                Ir a Checkout
              </CheckoutButton>
            </div>
          </>
        )}
      </Container>
    </motion.div>
  );
}
