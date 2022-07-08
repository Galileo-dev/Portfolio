import React from "react";
import { useEffect, useState } from "react";
import { useSpring } from "framer-motion";
import { useScroll } from "@use-gesture/react";
import styled from "styled-components";
import { NeumorphismSurface } from "../Neumorphism";

import {
  DiReact,
  DiRust,
  DiNodejs,
  DiRasberryPi,
  DiPython,
} from "react-icons/di";
import { SiDeno, SiStyledcomponents, SiSvelte } from "react-icons/si";
import { Icon } from "@iconify/react";

export const WebStack = () => {
  const Container = styled.div`
    display: flex;
    margin: 10px;
    border-radius: 0.5rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      height: 10px;
      width: 10px;
      background: gray;
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background: ${(props) => props.theme.palette.primary.contrastText};
    }
  `;
  const Tier = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;
  const TierItem = styled.div`
    margin: 0px 20px 0px 20px;
    flex-wrap: wrap;
    width: 100px;
  `;
  const TierLabel = styled.div`
    font-weight: 700;
    font-size: 1.5rem;

    color: ${(props) => props.theme.palette.surface.contrastText};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    letter-spacing: 2px;
    margin: 10px;
  `;

  const TierItemLabel = styled.div`
    font-weight: 500;
    color: ${(props) => props.theme.palette.surface.contrastText};
    text-align: center;
    position: relative;
  `;

  return (
    <>
      <Container>
        <TierLabel>Backend</TierLabel>
        <Tier>
          <TierItem>
            <DiRust size={100} color="#984C11" />
            <TierItemLabel>Rust</TierItemLabel>
          </TierItem>
          <TierItem>
            <Icon icon="logos:nodejs" width="100" />
            <TierItemLabel>Nodejs</TierItemLabel>
          </TierItem>
          <TierItem>
            <DiRasberryPi size={100} color="#B2103F" />
            <TierItemLabel>Rasberry Pi</TierItemLabel>
          </TierItem>
          <TierItem>
            <DiPython size={100} color="#FFD344" />
            <TierItemLabel>Python</TierItemLabel>
          </TierItem>
          <TierItem>
            <SiDeno size={100} color="#0B0B0B" />
            <TierItemLabel>Deno</TierItemLabel>
          </TierItem>
        </Tier>

        <TierLabel>Frontend</TierLabel>
        <Tier>
          <TierItem>
            <DiReact size={100} color="#00CEF2" />
            <TierItemLabel>React</TierItemLabel>
          </TierItem>
          <TierItem>
            <SiSvelte size={100} color="#F73C00" />
            <TierItemLabel>Svelte</TierItemLabel>
          </TierItem>
          <TierItem>
            <img
              src="https://www.styled-components.com/atom.png"
              height={100}
            />
            <TierItemLabel>styled components</TierItemLabel>
          </TierItem>
        </Tier>
      </Container>
    </>
  );
};
