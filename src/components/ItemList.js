import React, { useState, useEffect } from "react";
import styled from "styled-components"
import moment from "moment"; /* To format date */
import { Button } from "../lib/Button";

const ItemWrapper = styled.div`
  margin-top: 20px;
  border-bottom: 2px solid #fff;

  @media screen and (max-width: 820px) {
    margin-top: 10px;
  }

  :hover {
    -webkit-animation: shadow-drop-bottom 0.4s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @-webkit-keyframes shadow-drop-bottom {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
        box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
      }
    }
    @keyframes shadow-drop-bottom {
      0% {
        -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
      100% {
        -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
        box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
      }
    }
  }
`;

const ItemContainer = styled.div`
  padding: 20px;
  width: 400px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    width: 40vh;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;

  label {
    font-style: italic;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
  }
`;

const ItemFooter = styled.div`
  margin-bottom: 40px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const ItemsList = () => {
  const itemsUrl = "https://shoppinglist-be.herokuapp.com/items";
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Ask the server for the messages using a GET requests
    fetch(itemsUrl)
      .then((res) => {
        // Get the JSON of the response body
        return res.json();
      })
      .then((data) => {
        // State based on the response
        setItems(data);
      });
  }, []);

  return (
    <>
      {
        items.map(item => (
          <ItemWrapper>
            <ListItem>
              <ItemContainer>
                {/* <label>
                  buy more
                <CustomCheckbox />
                </label> */}
                <span> {item.quantity} |</span>
                <span> {item.name.toUpperCase()} |</span>
                <span> {item.category.toUpperCase()} </span>
                <Button
                  background="orange"
                  color="white"
                >
                  <i class="fas fa-trash-alt"></i>
                </Button>
              </ItemContainer>

              <ItemFooter>
                <span>ADDED: {moment(item.startDate).format("MMM Do YYYY")}</span>
              </ItemFooter>
            </ListItem>
          </ItemWrapper>
        ))
      }
    </>
  );
};