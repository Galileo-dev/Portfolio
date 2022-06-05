import React from "react";
import styled from "styled-components";
import gh_squid from "../icons/Github/Github_Squid.svg";
export const Card = (props: any) => {
  return (
    <Container>
      <Main> {props.mainText} </Main>
      <Description>
        {" "}
        <p style={{ marginBottom: "0" }}>{props.descriptionText}</p>
        <IconContainer>
          <Icon src={gh_squid} />
        </IconContainer>
      </Description>
    </Container>
  );
};
export const Icon = styled.img`
  margin-bottom: 5px;
  margin-right: 4px;
`;

export const IconContainer = styled.div`
  /* position: fixed;

  bottom: 0;
  right: 0; */
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  z-index: -1;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1rem;
  font-weight: 500;
  letter-spacing: 0.105em;
  height: 20rem;
  flex-direction: column;
`;
export const Description = styled.div`
  align-content: flex-end;

  background-color: ${(props) => props.theme.palette.card_surface.main};
  color: ${(props) => props.theme.palette.card_surface.contrastText};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  max-height: 100%;
  /* overflow-y: scroll; */
`;
// export const Container = styled.div`
//   display: flex;
//   flex-shrink: 0;
//   width: 300px;
//   height: 200px;
//   margin-left: 10px;
//   flex-direction: column;
//   overflow: hidden;
//   color: ${(props) => props.theme.palette.card.contrastText};
//   background-color: ${(props) => props.theme.palette.card.main};
//   border-radius: ${(props) => props.theme.borderRadius};
// `;

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  margin: 10px;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};

  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #262b33,
    6.22302px 6.22302px 18.6691px #000000;
`;
