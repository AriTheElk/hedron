import React from "react";
import { LayoutProvider, Section, Container } from "../../src";
import styled, { injectGlobal } from "styled-components";
import { StyledContainer, StyledBox } from "./Helpers";
import Browser from "./Browser";

const Sidebar = () => {
  return (
    <LayoutProvider debug={{ enabled: true }} gutter={20}>
      <Section fluid>
        <Browser />
        <StyledContainer height="90vh" borderColor="#1194f6">
          <StyledBox width={{ xs: "30%" }} bg="#b3e1f7" color="#1194f6" outline>
            <Container height="100%" direction="vertical" vAlign="end">
              <h1>Hedron</h1>
              <p>A no-frills flex-box grid system</p>
            </Container>
          </StyledBox>
          <StyledBox width={{ xs: "70%" }} bg="#b3e1f7">
            <Container
              direction="vertical"
              vAlign="center"
              hAlign="center"
              height="100%"
            >
              <StyledBox bg="#b3e1f7" noOutline>
                <h1>👊👊👊</h1>
              </StyledBox>
            </Container>
          </StyledBox>
        </StyledContainer>
      </Section>
    </LayoutProvider>
  );
};

export default Sidebar;
