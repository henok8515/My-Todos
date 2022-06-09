import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import Paper from "@mui/material/Paper";
import { TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Container = styled.div`
  background-color: var(--grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  height: 100%;
  width: 70%;
`;

const Input = styled(TextField)`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 50px;
  color: var(--white);
  background: var(--primary-500);
  border: none;
`;
const Wrapper = styled(Paper)`
  border-top: 5px solid var(--primary-500);
  width: 400px;
  display: flex;
  height: 450px;
  justify-content: center;
`;
function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    id: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <Container>
      <Wrapper>
        <Paper />

        <Form>
          <Logo />
          <Typography variant="h4">Login</Typography>
          <Input
            value={input.email}
            name="email"
            onChange={handleChange}
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <Input
            value={input.password}
            onChange={handleChange}
            name="password"
            id="filled-basic"
            label="password"
            variant="outlined"
            type="password"
          />
          <Link to="/">
            <Button>Submit</Button>
          </Link>

          <Typography variant="p">
            not a member <Link to="/register">Register</Link>
          </Typography>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
