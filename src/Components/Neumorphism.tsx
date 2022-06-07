import styled from "styled-components";
import { ColorType } from "../styles/theme";

export const NeumorphismInset = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background: #2c2f33;
  box-shadow: inset -6.22302px -6.22302px 18.6691px #3b4451,
    inset 6.22302px 6.22302px 18.6691px #000000;
  ${(props) => {
    switch (props.theme.kind) {
      case ColorType.Dark:
        return `
            color: ${props.theme.palette.secondary.contrastText};
            background-color: ${props.theme.palette.secondary.main};
          `;
      case ColorType.Light:
      default:
        return `
            color: ${props.theme.palette.primary.contrastText};
            background-color: ${props.theme.palette.primary.main};
          `;
    }
  }}
`;

export const NeumorphismSurface = styled.div`
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
    6.22302px 6.22302px 18.6691px #000000;

  ${(props) => {
    switch (props.theme.kind) {
      case ColorType.Dark:
      default:
        return `
     
              color: ${props.theme.palette.card.contrastText};
            background: ${props.theme.palette.card.main};
            background: #2c2f33;
            box-shadow: -6.22302px -6.22302px 18.6691px #3b4451,
              6.22302px 6.22302px 18.6691px #000000;
              

          `;
      case ColorType.Light:
        return `
            color: ${props.theme.palette.card.contrastText};
            background-color: ${props.theme.palette.card.main};
          `;
    }
  }}
`;
