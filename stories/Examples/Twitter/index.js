import React from 'react';
import Highlight from 'react-highlight';
import { LayoutProvider, Section, Container, Box, Hidden } from '../../../src';

const Example = `<LayoutProvider debug={{ enabled: true }} gutter="10px">
    <Section fluid>
      <Container direction="vertical" height="100vh">
        <Box>Header</Box>
        <Box grow={1} fluid>
          <Container grow={1} wrap={{ xs: true, sm: false }}>
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
          </Container>
        </Box>
        <Box>Footer</Box>
      </Container>
    </Section>
  </LayoutProvider>`;

const Twitter = (props) =>
  <LayoutProvider debug={{ enabled: true }} gutter="8px">
    <Section fluid>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
      <Container direction="vertical">
        <Box fluid>
          <Section>
            <Container>
              <Box>Header</Box>
              <Box>Moments</Box>
              <Box>Notifications</Box>
              <Box>Messages</Box>
              <Box shift="auto">Search</Box>
              <Box>Account</Box>
              <Box>Tweet</Box>
            </Container>
          </Section>
        </Box>
        <Box>
          <Section>
            <Container>
              <Box fluid width="200px">
                <Container direction="vertical">
                  <Box height="100px">User Card</Box>
                  <Box>Trends</Box>
                </Container>
              </Box>
              <Box grow>
                <Container direction="vertical">
                  <Box>
                    <Container hAlign="spaced">
                      <Box width="35px" height="35px" />
                      <Box grow height="35px" shift="16px">What's happening?</Box>
                    </Container>
                  </Box>
                  <Container>
                    <Box width="100%">View 69 new Tweets</Box>
                  </Container>
                </Container>
              </Box>
              <Box fluid width="200px">
                <Container direction="vertical">
                  <Box>Who to Follow</Box>
                  <Box>Footer Info</Box>
                </Container>
              </Box>
            </Container>
          </Section>
        </Box>
      </Container>
    </Section>
  </LayoutProvider>

export default Twitter;
