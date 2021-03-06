import React from "react";
import styled from "styled-components";
import { SideImage } from "../../styles/helpers";
import Galileo from "../../icons/Profile/galileo_profile.svg";

export const Introduction = () => {
  return (
    <SideImage>
      <Image src={Galileo} />
      <TextContainer>
        <H2> Hello My name is Fionn aka Galileo</H2>
        <Paragraph>
          I'm 17 years old programmer who loves technology and programming, I
          started when I was 8 years old and haven't looked back since.
          <br /> the world fascinates me so I poke it.
        </Paragraph>
      </TextContainer>
    </SideImage>
  );
};

export let Image = styled.img`
  border-radius: 1rem;
  height: auto;
  width: 15rem;
`;

let H2 = styled.h2`
  margin: 0;
`;

let H3 = styled.h3`
  margin: 0;
  margin-top: 1rem;
`;

let Paragraph = styled.p`
  padding: 0;
  margin: 0;
`;

let TextContainer = styled.div`
  font-size: 1rem;
  margin: 0.5rem;
  margin-left: 2rem;
`;
