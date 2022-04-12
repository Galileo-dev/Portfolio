import styled from "styled-components";
export let MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0% 20% 0% 20%;
`;

export let SecondaryContainer = styled.div`
  width: 100%;
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
  flex-direction: row;
`;
