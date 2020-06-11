import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Item } from "components/Item";
import { Select } from "lib/Select";

const Ul = styled.ul`
  padding: 0;
  border-top: 2px solid #000;
`;

export const ItemList = () => {
  const [category, setCategory] = useState("");
  const items = useSelector((state) => {
    if (!category) return state.fridge.items;
    else return state.fridge.items.filter((item) => item.category === category);
  });

  return (
    <>
      <label>
        Show by Category:
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="drink">drink</option>
          <option value="food">food</option>
          <option value="candy">candy</option>
          <option value="other">other</option>
          <option value="">ALL</option>
        </Select>
      </label>
      <Ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Ul>
    </>
  );
};
