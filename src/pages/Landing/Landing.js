import React from "react";

import main from "../../assets/images/main.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 120px 70px;
`;
const H1 = styled.h1`
  font-weight: 600;
`;
const P = styled.p``;
const Button = styled.button`
  padding: 10px 50px;
  color: var(--white);
  background: var(--primary-500);
  border: none;
`;
const Span = styled.span`
  color: var(--primary-500);
`;
const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
`;
const Img = styled.img`
  object-fit: cover;
  width: 50%;
`;
const Wrapper = styled.div`
  width: 50%;
`;
function Landing() {
  return (
    <Main>
      <Wrapper>
        <Container>
          <H1>
            Job <Span>Tracking </Span>App
          </H1>
          <P>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </P>
          <Link to="/login">
            <Button>Login/Register</Button>
          </Link>
        </Container>
      </Wrapper>
      <Img src={main} alt="job hunt" className="img main-img" />
    </Main>
  );
}

export default Landing;
