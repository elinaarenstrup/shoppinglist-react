import styled from "styled-components";

export const Select = styled.select`
  height: 35px;
  background: darkgrey;
  color: #fff;
  padding-left: 5px;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  margin: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
