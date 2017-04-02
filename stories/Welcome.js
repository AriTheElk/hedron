import React from 'react';
import styled from 'styled-components';
import { Section, Container, Box } from '../src';

const Welcome = (props) => (
  <Section>
    <Container hAlign="center">
      <Box>
        <img src="http://i.imgur.com/gjGjVOh.png" alt="hedron logo"/>
      </Box>
    </Container>
  </Section>
);

export default Welcome;
