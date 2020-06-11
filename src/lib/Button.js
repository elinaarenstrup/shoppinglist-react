import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 20px;
  margin-top: 10px;
  background: ${(props) => props.background || "yellow"};
  color: ${(props) => props.color || "#000"};
  border-radius: 20px;
  font-size: 20px;
  text-transform: uppercase;
  border: none;

  &:hover {
    background: black;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
