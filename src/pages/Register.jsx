import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const Container = styled.div`
  max-width: 400px;
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

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
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

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Simulando registro con:", { email, password });

    // Guardar usuario en Redux y localStorage
    dispatch(setUser({ email }));

    navigate("/"); // Redirige directo a Home después de registrarse
  };

  return (
    <Container>
      <Title>Crear Cuenta</Title>
      <Form onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Registrarse</Button>
      </Form>
    </Container>
  );
}
