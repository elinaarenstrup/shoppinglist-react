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

  :hover {
    -webkit-animation: wobble-hor-bottom 0.8s both;
    animation: wobble-hor-bottom 0.8s both;

    @-webkit-keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
      }
    }
    @keyframes wobble-hor-bottom {
      0%,
      100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
      15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
      }
      30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
      }
      45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
      }
      60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
      }
      75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
      }
    }
  }
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
