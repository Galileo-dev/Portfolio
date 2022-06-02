import styled from "styled-components";
import { device } from "../styles/helpers";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}
interface IProps {
  variant?: VARIANT;
}

export const Section = styled.section<IProps>`
  margin: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border: solid 0.3rem ${(props) => props.theme.palette.common.black};
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