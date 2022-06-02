import styled from "styled-components";

export const Card = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: ${(props) => props.theme.palette.secondary.contrastText};
  background-color: ${(props) => props.theme.palette.surface.main};
  border-radius: ${(props) => props.theme.borderRadius};
`;
