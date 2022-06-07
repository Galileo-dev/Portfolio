import { Props } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { device } from "../styles/helpers";
import { NeumorphismInset, NeumorphismSurface } from "./Neumorphism";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}
interface IProps {
  variant?: VARIANT;
}

export const Section = (props: any) => {
  return (
    <>
      <SectionStyle>
        {" "}
        <Title>{props.name}</Title>
        {props.children}
      </SectionStyle>
    </>
  );
};

const Title = styled.div`
  position: relative;
  top: -50px;
  margin-bottom: -50px;
  font-size: 2rem;
  /* background-color: ${(props) => props.theme.palette.secondary.main}; */

  /* background: ${(props) =>
    `linear-gradient(to bottom, transparent 63%,  ${props.theme.palette.secondary.main}  37%)`}; */

  /* background: ${(props) =>
    `linear-gradient(
    180deg,
    transparent 0%,
    ${props.theme.palette.secondary.main} 60.33%,
    ${props.theme.palette.secondary.main} 50.33%,
    transparent 100%
  )`}; */
  /* backdrop-filter: blur(10px); */
  background: ${(props) =>
    `linear-gradient(
    180deg,
    transparent 0%,
    transparent 64%,
    ${props.theme.palette.secondary.main} 64%,
    ${props.theme.palette.secondary.main} 75%,
    transparent 100%
  )`};

  width: max-content;
  padding: 0px 10px 0px 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;

export const SectionStyle = styled(NeumorphismSurface)<IProps>`
  margin: 1rem;
  margin-bottom: 2rem;
  margin-top: 1.75rem;
  padding: 1rem;
  border: solid 0.2rem ${(props) => props.theme.palette.common.black};
  width: 75%;

  @media ${device.mobileL} {
    width: 80%;
  }

  border-radius: ${(props) => props.theme.borderRadius};
  ${(props) => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
            color: ${props.theme.palette.secondary.contrastText};
            background-color: ${props.theme.palette.secondary.main};
          `;
      case VARIANT.PRIMARY:
      default:
        return `
            color: ${props.theme.palette.primary.contrastText};
            background-color: ${props.theme.palette.primary.main};
          `;
    }
  }}
`;
