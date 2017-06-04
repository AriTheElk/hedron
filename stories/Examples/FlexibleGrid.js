import React from "react";
import styled from "styled-components";
import { LayoutProvider, Section, Container } from "../../src";
import { StyledContainer, StyledBox } from "./Helpers";
import Browser from "./Browser";

const GridItem = styled(StyledBox)`
    min-height: 200px;
    background-color: #fff8e0;
    border-radius: 4px;
    outline: solid 5px #ffc200;
`;

const FlexibleGrid = () => {
  return (
    <LayoutProvider debug={{ enabled: true }} gutter={20}>
      <Section fluid>
        <Browser />

        <StyledContainer borderColor="#ffc200" bg="#ffc200" wrap>
          <GridItem grow="1">1</GridItem>
          <GridItem grow="2">2</GridItem>
        </StyledContainer>

        <StyledContainer borderColor="#ffc200" bg="#ffc200" wrap>
          <GridItem width={{ xs: "100%", md: "50%", lg: "25%" }}>1</GridItem>
          <GridItem width={{ xs: "100%", md: "50%", lg: "25%" }}>2</GridItem>
          <GridItem width={{ xs: "100%", md: "50%", lg: "25%" }}>3</GridItem>
          <GridItem width={{ xs: "100%", md: "50%", lg: "25%" }}>4</GridItem>
        </StyledContainer>

        <StyledContainer borderColor="#ffc200" bg="#ffc200" hAlign="spaced">
          {[...Array(15)].map((e, i) => (
            <GridItem width="100px">{i + 1}</GridItem>
          ))}
        </StyledContainer>

      </Section>
    </LayoutProvider>
  );
};

export default FlexibleGrid;
