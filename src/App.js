import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";
import { fridge } from "reducers/fridge";

import { AddItemForm } from "components/AddItemForm";
import { ItemList } from "components/ItemList";
import { ClearButton } from "components/ClearButton";
import { FridgeSummary } from "components/FridgeSummary";

const AppWrapper = styled.div`
  margin: 0;
  padding: 8px 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  background: #f1f1f1;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding: 10px;
  }
`;

const reducer = combineReducers({
  fridge: fridge.reducer,
});

// New store code
// Retrieve the localstorage and use it as initial state
const persistedStateJSON = localStorage.getItem("shoppinglist-reduxState");
/* console.log(`persistedStateJSON: ${persistedStateJSON}`);*/
let persistedState = {};

//persistedState = parsed json
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`);

// 2. Create the store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem(
    "shoppinglist-reduxState",
    JSON.stringify(store.getState())
  );
});

export const App = () => {
  return (
    <Provider store={store}>
      {/* Will have access to the global state/store */}
      <AppWrapper>
        <FridgeSummary />
        <ContentWrapper>
          <AddItemForm />
          <ItemList />
          <ClearButton />
        </ContentWrapper>
      </AppWrapper>
    </Provider>
  );
};
