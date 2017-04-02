import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Container, Box, Hidden } from '../../src';
import Notification from '../Notification';

const Example = `<LayoutProvider debug={{ enabled: true }} gutter={20}>
  <Section>
    <Section absolute top="0" bottom="0" right="0" width="250px">
      <Container direction="vertical">
        <Box>
          <div>This is a notification</div>
        </Box>
      </Container>
    </Section>
    <Container>
      <Box xs="100%">Header</Box>
    </Container>
    <Container>
      <Box xs="grow" sm="25%">Sidebar</Box>
      <Box sm="grow" fluid>
        <Container direction="horizontal" wrap>
          <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
          <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
          <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
          <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
        </Container>
      </Box>
    </Container>
    <Container>
      <Box xs="100%">Footer</Box>
    </Container>
  </Section>
</LayoutProvider>`;

const VSCode = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter={20}>
    <Section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Section absolute top="0" bottom="0" right="0" width="250px">
        <Container direction="vertical">
          {
            [...Array(3)].map((e, i) =>
              <Box key={i}>
                <Notification>This is a notification</Notification>
              </Box>)
          }
        </Container>
      </Section>
      <Container>
        <Box xs="100%">Header</Box>
      </Container>
      <Container>
        <Box xs="grow" sm="25%">Sidebar</Box>
        <Box sm="grow" fluid>
          <Container direction="horizontal" wrap>
            <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
            <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
            <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
            <Box xs="100%" md="50%" lg="grow">Lorem ipsum dolor sit amet</Box>
          </Container>
        </Box>
      </Container>
      <Container>
        <Box xs="100%">Footer</Box>
      </Container>
      <Section>
        <Highlight>{Example}</Highlight>
      </Section>
    </Section>
  </LayoutProvider>

export default VSCode;
