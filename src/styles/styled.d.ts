// styled.d.ts
import "styled-components";
import { ColorType } from "./theme";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    kind: ColorType;
    borderRadius: string;
    background: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
      surface: IPalette;
      card: IPalette;
      card_surface: IPalette;
    };
  }
}
