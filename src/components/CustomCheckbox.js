import React, { useState } from "react";
import styled from "styled-components";

export const CustomCheckbox = ({ isChecked, onChangeHandler }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleOnChange = (event) => {
    onChangeHandler();
    setChecked(event.target.checked);
  };

  const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    display: inline;
  `;

  // Checkmark itself
  const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
  `;

  const StyledCheckbox = styled.div`
    margin-top: 10px;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: ${(props) => (props.checked ? "pink" : "darkgrey;")};
    border-radius: ${(props) => (props.checked ? "20px" : "0px")};
    transition: all 150ms;
    ${Icon} {
      visibility: ${(props) => (props.checked ? "visible" : "hidden")};
    }
  `;

  const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
  `;

  const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props}></HiddenCheckbox>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 3 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return (
    <div>
      <label>
        <Checkbox checked={checked} onChange={handleOnChange}></Checkbox>
      </label>
    </div>
  );
};
