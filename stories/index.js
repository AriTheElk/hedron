import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Section, Container, Box, Hidden, LayoutProvider } from '../src';
import Notification from './Notification';
import Welcome from './Welcome';
import VSCode from './Examples/VSCode';
import Notifications from './Examples/Notifications';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  code.hljs {
    border-radius: 4px;
    padding: 15px 25px;
    max-width: 100%;
    overflow: scroll;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 8px;
    }
  }
  a {
    color: dodgerblue;
  }
`;

storiesOf('Welcome', module)
  .add('Box Sizes (xs)', () => (
    <Welcome />
  ));

storiesOf('Vertical Boxes', module)
  .add('Box Sizes (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box xs="100px">xs="100px"</Box>
          <Box xs="50%">xs="50%"</Box>
          <Box xs="grow">xs="grow"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box sm="100px">sm="100px"</Box>
          <Box sm="50%">sm="50%"</Box>
          <Box sm="grow">sm="grow"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box md="100px">md="100px"</Box>
          <Box md="50%">md="50%"</Box>
          <Box md="grow">md="grow"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box lg="100px">lg="100px"</Box>
          <Box lg="50%">lg="50%"</Box>
          <Box lg="grow">lg="grow"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box xsShift="100px">xsShift="100px"</Box>
          <Box xsShift="50%">xsShift="50%"</Box>
          <Box xsShift="auto">xsShift="auto"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box smShift="100px">smShift="100px"</Box>
          <Box smShift="50%">smShift="50%"</Box>
          <Box smShift="auto">smShift="auto"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box mdShift="100px">mdShift="100px"</Box>
          <Box mdShift="50%">mdShift="50%"</Box>
          <Box mdShift="auto">mdShift="auto"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <Container direction="vertical">
          <Box lgShift="100px">lgShift="100px"</Box>
          <Box lgShift="50%">lgShift="50%"</Box>
          <Box lgShift="auto">lgShift="auto"</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ));


storiesOf('Horizontal Boxes', module)
  .add('Box Sizes (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have xs="grow" set on them
      </p>
        <Container direction="horizontal">
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
          <Box xs="grow">Test</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have sm="grow" set on them
      </p>
        <Container direction="horizontal">
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
          <Box sm="grow">Test</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have md="grow" set on them
      </p>
        <Container direction="horizontal">
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
          <Box md="grow">Test</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have lg="grow" set on them
      </p>
        <Container direction="horizontal">
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
          <Box lg="grow">Test</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have no set size, only an xsShift property.
        They automatically flex based on the amount of room left.
      </p>
        <Container direction="horizontal">
          <Box xsShift={0} />
          <Box xsShift={1} />
          <Box xsShift={2} />
          <Box xsShift={3} />
          <Box xsShift={4} />
          <Box xsShift={5} />
          <Box xsShift={6} />
          <Box xsShift={7} />
          <Box xsShift={8} />
          <Box xsShift={9} />
          <Box xsShift={10} />
          <Box xsShift={11} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have no set size, only an smShift property.
        They automatically flex based on the amount of room left.
      </p>
        <Container direction="horizontal">
          <Box smShift={0} />
          <Box smShift={1} />
          <Box smShift={2} />
          <Box smShift={3} />
          <Box smShift={4} />
          <Box smShift={5} />
          <Box smShift={6} />
          <Box smShift={7} />
          <Box smShift={8} />
          <Box smShift={9} />
          <Box smShift={10} />
          <Box smShift={11} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have no set size, only an mdShift property.
        They automatically flex based on the amount of room left.
      </p>
        <Container direction="horizontal">
          <Box mdShift={0} />
          <Box mdShift={1} />
          <Box mdShift={2} />
          <Box mdShift={3} />
          <Box mdShift={4} />
          <Box mdShift={5} />
          <Box mdShift={6} />
          <Box mdShift={7} />
          <Box mdShift={8} />
          <Box mdShift={9} />
          <Box mdShift={10} />
          <Box mdShift={11} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Shift (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have no set size, only an lgShift property.
        They automatically flex based on the amount of room left.
      </p>
        <Container direction="horizontal">
          <Box lgShift={0} />
          <Box lgShift={1} />
          <Box lgShift={2} />
          <Box lgShift={3} />
          <Box lgShift={4} />
          <Box lgShift={5} />
          <Box lgShift={6} />
          <Box lgShift={7} />
          <Box lgShift={8} />
          <Box lgShift={9} />
          <Box lgShift={10} />
          <Box lgShift={11} />
        </Container>
      </Section>
    </LayoutProvider>
  ));

storiesOf('Hidden', module)
  .add('xs', () => (
    <LayoutProvider debug={{ enabled: true }}>
      <Section debug>
        <p>
          This row is hidden on xs
      </p>
        <Hidden xs><Container><Box /></Container></Hidden>
      </Section>
    </LayoutProvider>
  ))
  .add('sm', () => (
    <LayoutProvider debug={{ enabled: true }}>
      <Section debug>
        <p>
          This row is hidden on sm
      </p>
        <Hidden sm><Container><Box /></Container></Hidden>
      </Section>
    </LayoutProvider>
  ))
  .add('md', () => (
    <LayoutProvider debug={{ enabled: true }}>
      <Section debug>
        <p>
          This row is hidden on md
      </p>
        <Hidden md><Container><Box /></Container></Hidden>
      </Section>
    </LayoutProvider>
  ))
  .add('lg', () => (
    <LayoutProvider debug={{ enabled: true }}>
      <Section debug>
        <p>
          This row is hidden on lg
      </p>
        <Hidden lg><Container><Box /></Container></Hidden>
      </Section>
    </LayoutProvider>
  ));

storiesOf('LayoutProvider', module)
  .add('Default Layout', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={20}>
      <Section>
        <p>
          This layout is using the default breakpoints:
          500, 768, and 1100.
        </p>
        <Container>
          <Box xs={12}>Header</Box>
        </Container>
        <Container>
          <Box sm={3}>Sidebar</Box>
          <Box sm={9} fluid>
            <Container>
              <Box md={6} lg={4}>A blog post</Box>
              <Box md={6} lg={4}>Another blog post</Box>
              <Box md={6} lg={4}>Yet another blog post</Box>
            </Container>
          </Box>
        </Container>
        <Container>
          <Box xs={12}>Footer</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ));

storiesOf('Layout Examples', module)
  .add('Notifications', () => (
    <Notifications />
  ))
  .add('VSCode Inspired', () => (
    <VSCode />
  ));
