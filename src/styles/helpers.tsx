import styled from "styled-components";
import { Image } from "../Components/Blocks/Introduction";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export let MainContainer = styled.div`
  display: flex;
  align-items: center;
  // Switch to rows on large devices
  flex-direction: row;
`;

export let SecondaryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export enum POSITION {
  TOPLEFT,
  TOPRIGHT,
  BOTTOMLEFT,
  BOTTOMRIGHT,
}

interface IProps {
  position?: POSITION;
}

export let Float = styled.div<IProps>`
  position: absolute;
  ${(props) => {
    switch (props.position) {
      case POSITION.BOTTOMRIGHT:
        return `
          bottom:0;
            right:0;
        `;
      case POSITION.BOTTOMLEFT:
        return `
          bottom:0;
          left:0;
        `;
      case POSITION.TOPLEFT:
        return `
          top:0;
          left:0;
        `;
      case POSITION.TOPRIGHT:
      default:
        return `
            top:0;
          right:0;
        `;
    }
  }}
`;

export enum SIDE {
  LEFT,
  RIGHT,
}

interface IProps {
  side?: SIDE;
}

export let SideImage = styled.div<IProps>`
  align-items: center;
  display: flex;
  // Switch to rows on large devices

  @media ${device.tablet} {
    flex-direction: column;

    & ${Image} {
      width: 100%;
      max-width: 15rem;
    }
  }
`;
