import styled from "styled-components";
import { motion, Variant } from "framer-motion";
import React from "react";
import { Props } from "@react-three/fiber";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}
interface IProps {
  variant?: VARIANT;
}

export const ButtonStyle = styled.div<IProps>`
  margin: 8px;
  padding: 0.3rem;
  user-select: none;

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

type ButtonProps = {
  variant: VARIANT;
} & React.ComponentProps<"div">;

export const Button = ({
  variant,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyle
      variant={variant}
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
};
