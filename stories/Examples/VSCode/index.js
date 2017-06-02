import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Flex, Box, Hidden } from '../../../src';
import Compass from './Compass';

const Example = `<LayoutProvider debug={{ enabled: true }} gutter="10px">
    <Section fluid>
      <Flex direction="vertical" height="100vh">
        <Box>Header</Box>
        <Box grow={1} fluid>
          <Flex grow={1} wrap={{ xs: true, sm: false }}>
            <Box
              width={{ xs: '100%', sm: "45px" }}
              height={{ xs: "45px", sm: "auto" }}
            >
              <Compass />
            </Box>
            <Box grow={1}>
              <h2>Here's the source code for this layout</h2>
              <Highlight className="xml">{Example}</Highlight>
            </Box>
          </Flex>
        </Box>
        <Box>Footer</Box>
      </Flex>
    </Section>
  </LayoutProvider>`;

const VSCode = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter="10px">
    <Section fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Flex direction="vertical" height="100vh">
        <Box>Header</Box>
        <Box grow shrink fluid>
          <Flex grow wrap={{ xs: true, sm: false }}>
            <Box
              width={{ xs: '100%', sm: "45px" }}
              height={{ xs: "45px", sm: "auto" }}
            >
              <Compass />
            </Box>
            <Box grow shrink>
              <h2>Here's the source code for this layout</h2>
              <Highlight className="xml">{Example}</Highlight>
            </Box>
          </Flex>
        </Box>
        <Box>Footer</Box>
      </Flex>
    </Section>
  </LayoutProvider>

export default VSCode;
