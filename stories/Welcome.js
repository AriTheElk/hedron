import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Container, Box } from '../src';

const Welcome = (props) => (
  <LayoutProvider debug={{ enabled: true }}>
    <Section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Container hAlign="center">
        <Box flex="none">
          <img src="http://i.imgur.com/1f9IIN8.png" alt="hedron logo" />
        </Box>
      </Container>
      <Container hAlign="center" wrap>
        <Box xs="100%" sm="40%" lg="30%">
          <h2>Installation</h2>
          <Highlight className="bash">
            npm install --save-dev hedron
          </Highlight>
        </Box>
        <Box xs="100%" sm="40%" lg="30%">
          <h2>Resources</h2>
          <ul>
            <li><a href="https://github.com/JSBros/hedron" target="_blank">Source Code</a></li>
            <li><a href="https://github.com/JSBros/hedron/wiki/Grid-System" target="_blank">Documentation</a></li>
            <li><a href="https://github.com/JSBros/hedron/issues" target="_blank">Issue Tracker</a></li>
          </ul>
        </Box>
      </Container>
    </Section>
  </LayoutProvider>
);

export default Welcome;
