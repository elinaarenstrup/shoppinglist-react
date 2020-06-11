import styled from "styled-components";

export const Header = styled.h1`
  color: ${(props) => props.color || "#fff"};
  font-size: 72px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: ${(props) => props.color || "#000"};
  font-size: 24px;
  text-transform: uppercase;
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.color || "#orange"};
  background: black;
  padding: 8px 20px;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;
