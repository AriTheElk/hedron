import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Flex, Box, Hidden } from '../../../src';

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

const Twitter = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter="8px">
    <Section fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Flex direction="vertical">
        <Box fluid>
          <Section>
            <Flex>
              <Box>Header</Box>
              <Box>Moments</Box>
              <Box>Notifications</Box>
              <Box>Messages</Box>
              <Box shift="auto">Search</Box>
              <Box>Account</Box>
              <Box>Tweet</Box>
            </Flex>
          </Section>
        </Box>
        <Box>
          <Section>
            <Flex>
              <Box fluid width="200px">
                <Flex direction="vertical">
                  <Box height="100px">User Card</Box>
                  <Box>Trends</Box>
                </Flex>
              </Box>
              <Box grow>
                <Flex direction="vertical">
                  <Box>
                    <Flex hAlign="spaced">
                      <Box width="35px" height="35px" />
                      <Box grow height="35px" shift="16px">What's happening?</Box>
                    </Flex>
                  </Box>
                  <Flex>
                    <Box width="100%">View 69 new Tweets</Box>
                  </Flex>
                </Flex>
              </Box>
              <Box fluid width="200px">
                <Flex direction="vertical">
                  <Box>Who to Follow</Box>
                  <Box>Footer Info</Box>
                </Flex>
              </Box>
            </Flex>
          </Section>
        </Box>
      </Flex>
    </Section>
  </LayoutProvider>

export default Twitter;
