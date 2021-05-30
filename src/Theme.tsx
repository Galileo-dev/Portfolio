//   /* Color the border and text with theme.main */
//   color: ${props => props.theme.main};
//   border: 2px solid ${props => props.theme.main};
// `;
// ${({ theme }) => theme.primaryColor};

export interface theme {
  light: LightOrSeaWave;
  seaWave: LightOrSeaWave;
}
export interface LightOrSeaWave {
  id: string;
  name: string;
  colors: Colors;
  font: string;
}
export interface Colors {
  body: string;
  text: string;
  button: Button;
  link: Link;
}
export interface Button {
  text: string;
  background: string;
}
export interface Link {
  text: string;
  opacity: number;
}

export const LightTheme: theme = {
  light: {
    id: "T_001",
    name: "Light",
    colors: {
      body: "#FFFFFF",
      text: "#000000",
      button: {
        text: "#FFFFFF",
        background: "#000000",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
    },
    font: "Tinos",
  },
  seaWave: {
    id: "T_007",
    name: "Sea Wave",
    colors: {
      body: "#9be7ff",
      text: "#0d47a1",
      button: {
        text: "#ffffff",
        background: "#0d47a1",
      },
      link: {
        text: "#0d47a1",
        opacity: 0.8,
      },
    },
    font: "Ubuntu",
  },
};
