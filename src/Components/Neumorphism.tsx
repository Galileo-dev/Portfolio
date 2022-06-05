import styled from "styled-components";

let NeumorphismInset = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background: #2c2f33;
  box-shadow: inset -6.22302px -6.22302px 18.6691px #3b4451,
    inset 6.22302px 6.22302px 18.6691px #000000;
`;

export const NeumorphismSurface = styled.div`
  background: #2c2f33;
  box-shadow: -6.22302px -6.22302px 18.6691px #262b33,
    6.22302px 6.22302px 18.6691px #000000;
`;
