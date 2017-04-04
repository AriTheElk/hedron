import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Container, Box, Hidden } from '../../src';

const Example = `<LayoutProvider debug={{ enabled: true }} gutter={20}>
    <Section fluid>
      <Container direction="vertical" height="100vh">
        <Box>Header</Box>
        <Box grow fluid>
          <Container grow>
            <Box xs="45px" />
            <Box grow />
          </Container>
        </Box>
        <Box>Footer</Box>
      </Container>
    </Section>
  </LayoutProvider>`;

const VSCode = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter={20}>
    <Section fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Container direction="vertical" height="100vh">
        <Box>Header</Box>
        <Box grow fluid>
          <Container grow>
            <Box width={{ xs: '50%', sm: '25%', md: '45px' }}></Box>
            <Box grow>
              <h2>Here's the source code for this layout</h2>
              <Highlight className="xml">{Example}</Highlight>
            </Box>
          </Container>
        </Box>
        <Box>Footer</Box>
      </Container>
    </Section>
  </LayoutProvider>

export default VSCode;
