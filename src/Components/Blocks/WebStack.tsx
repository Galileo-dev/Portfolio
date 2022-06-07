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
} from "react-icons/Di";
import { SiDeno, SiStyledcomponents, SiSvelte } from "react-icons/Si";

export const WebStack = () => {
  const Container = styled.div`
    display: flex;
    margin: 10px;
    border-radius: 0.5rem;
    flex-direction: column;
    width: 100%;
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
  `;
  const TierItem = styled.div`
    margin: 0px 20px 0px 20px;
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
  return (
    <>
      <Container>
        <TierLabel>Backend</TierLabel>
        <Tier>
          <TierItem>
            <DiRust size={100} color="#984C11" />
          </TierItem>
          <TierItem>
            <DiNodejs size={100} color="#F2F2F2" />
          </TierItem>
          <TierItem>
            <DiRasberryPi size={100} />
          </TierItem>
          <TierItem>
            <DiPython size={100} />
          </TierItem>
          <TierItem>
            <SiDeno size={100} />
          </TierItem>
        </Tier>

        <TierLabel>Frontend</TierLabel>
        <Tier>
          <TierItem>
            <DiReact size={100} />
          </TierItem>
          <TierItem>
            <SiSvelte size={100} />
          </TierItem>
          <TierItem>
            <SiStyledcomponents size={100} />
          </TierItem>
        </Tier>
      </Container>
    </>
  );
};
