import React from "react";
import { useDispatch } from "react-redux";
import { fridge } from "reducers/fridge";
import { Button } from "lib/Button";

export const ClearButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      background="orange"
      color="white"
      onClick={() => {
        dispatch(fridge.actions.removeAll());
      }}
    >
      Remove all
    </Button>
  );
};
