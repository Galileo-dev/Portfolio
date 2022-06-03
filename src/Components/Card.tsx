import React from "react";
import styled from "styled-components";

export const Card = (props: any) => {
  return (
    <Container>
      <Main> {props.mainText} </Main>
      <Description>
        {" "}
        <p>{props.descriptionText}</p>
      </Description>
    </Container>
  );
};

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
  height: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  margin-left: 10px;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.palette.card.contrastText};
  background-color: ${(props) => props.theme.palette.card.main};
  border-radius: ${(props) => props.theme.borderRadius};
`;
