import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Flex, Box, Hidden } from '../../src';
import Notification from '../Notification';

const Example = `<LayoutProvider debug={{ enabled: true }} gutter="20px">
  <Section>
    <Section absolute top="0" bottom="0" right="0" width="250px">
      <Flex>
        <Box grow={1}>Header</Box>
      </Flex>
      <Flex>
        <Box width="25%">Sidebar</Box>
        <Box grow={{ sm: true }} fluid>
          <Flex direction="horizontal" wrap>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Box grow={1}>Footer</Box>
      </Flex>
    </Section>
  </Section>
</LayoutProvider>`;

const VSCode = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter="20px">
    <Section>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Section absolute top="0" bottom="0" right="0" width="250px">
        <Flex direction="vertical">
          {
            [...Array(3)].map((e, i) =>
              <Box key={i}>
                <Notification>This is a notification</Notification>
              </Box>)
          }
        </Flex>
      </Section>
      <Flex>
        <Box grow={1}>Header</Box>
      </Flex>
      <Flex>
        <Box width="25%">Sidebar</Box>
        <Box grow={{ sm: true }} fluid>
          <Flex direction="horizontal" wrap>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
            <Box width={{ xs: "100%", md: "50%" }} grow={{ lg: 1 }}>Lorem ipsum dolor sit amet</Box>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Box grow={1}>Footer</Box>
      </Flex>
      <Section fluid>
        <Flex>
          <Box>
            <Highlight>{Example}</Highlight>
          </Box>
        </Flex>
      </Section>
    </Section>
  </LayoutProvider>

export default VSCode;
