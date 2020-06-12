import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "lib/Container";
import { Header, Title, Subtitle } from "lib/Text";

const SummaryContainer = styled.div`
  margin-top: 0;
  margin-bottom: 40px;
  background: pink;
  padding: 20px;
`;

export const FridgeSummary = () => {
  const items = useSelector((state) => state.fridge.items);
  const buyMoreItems = items.filter((item) => item.needsMore).length;
  // Just interested in how many they are, so just length here.

  return (
    <Container>
      <Header>Cool list</Header>
      <SummaryContainer>
        <Title>I have {items.length} items at home.</Title>

        <Subtitle color="#fff">
          I need to buy {buyMoreItems} item
          {buyMoreItems === 1 ? "." : "s."}
        </Subtitle>
      </SummaryContainer>
    </Container>
  );
};
