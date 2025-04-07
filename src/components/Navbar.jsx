import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { motion } from "framer-motion";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;

  font-size: 16px; 

    /* Media query para ajustar tamaño en móviles */
  @media (max-width: 768px) {
    font-size: 10px;  
  }
`;

const Logo = styled(motion.h1)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.accent};
  font-weight: bold;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLink = styled(motion(Link))`
  color: ${(props) => props.theme.colors.light};
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const CartBadge = styled.span`
  background-color: ${(props) => props.theme.colors.danger};
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const UserInfo = styled(motion.div)`
  color: ${(props) => props.theme.colors.light};
  font-size: 0.95rem;
`;

const LogoutButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

// Animación para cada link tipo burbuja
const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.6 }}
    >
      <Logo
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        NovaFit
      </Logo>

      <Links>
        <StyledLink to="/" custom={0} variants={itemVariants} initial="hidden" animate="visible">
          Inicio
        </StyledLink>

        <StyledLink to="/cart" custom={1} variants={itemVariants} initial="hidden" animate="visible">
          Carrito
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </StyledLink>

        {!user && (
          <>
            <StyledLink to="/login" custom={2} variants={itemVariants} initial="hidden" animate="visible">
              Login
            </StyledLink>
            <StyledLink to="/register" custom={3} variants={itemVariants} initial="hidden" animate="visible">
              Registro
            </StyledLink>
          </>
        )}

        {user && (
          <>
            <UserInfo
              custom={2}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Hola, {user.email}
            </UserInfo>
            <LogoutButton
              onClick={handleLogout}
              custom={3}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Cerrar sesión
            </LogoutButton>
          </>
        )}
      </Links>
    </Nav>
  );
}
