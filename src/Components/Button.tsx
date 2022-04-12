import styled from "styled-components";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}
interface IProps {
  variant?: VARIANT;
}

export const Button = styled.div<IProps>`
  margin: 8px;
  padding: 0.3rem;
  user-select: none;
  transition: 10ms ease;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
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
