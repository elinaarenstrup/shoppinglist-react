import React, { useState } from "react";
import styled from "styled-components"
import { Button } from "../lib/Button";
import { Select } from "../lib/Select";

const itemsUrl = "https://shoppinglist-be.herokuapp.com/items";

const FormWrapper = styled.div`
  width: 400px;
  padding: 20px;

  @media screen and (max-width: 820px) {
    width: 100%;
    padding: 10px;
  }
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: right;
  border: none;
  text-transform: uppercase;
`;

const Input = styled.input`
  height: 35px;
  background: #fff;
  color: #000;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-top: 10px;
  margin-left: 10px;

  ::placeholder {
    color: #c9c9c9;
  }
`;

export const ItemsForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    // Prevent page from refreshing automatically
    event.preventDefault();

    // Posting the message to the server
    fetch(itemsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Send the JSON as a string
      body: JSON.stringify({ name, quantity, category }),
    }).then(() => {
      // Reload the page after the request is complete
      window.location.reload();
    });
  };

  return (
    <FormWrapper>
      <Form >
        <label>
          Name
        <Input
            type="text"
            value={name}
            placeholder="Product name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Quantity
        <Input
            type="number"
            value={quantity}
            min="1"
            max="20"
            placeholder="0"
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>

        <label>
          Category
        <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">select...</option>
            <option value="drink">drink</option>
            <option value="food">food</option>
            <option value="candy">candy</option>
            <option value="other">other</option>
          </Select>
        </label>

        <Button type="submit" onClick={handleSubmit} background="pink">
          submit
      </Button>
      </Form>
    </FormWrapper>
  );
};