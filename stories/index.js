import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Section, Container, Box, Hidden, LayoutProvider } from '../src';
import Notification from './Notification';

storiesOf('Vertical Boxes', module)
  .add('Box Sizes (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the xs property set.
      </p>
        <Container direction="vertical">
          <Box xs={1} />
          <Box xs={2} />
          <Box xs={3} />
          <Box xs={4} />
          <Box xs={5} />
          <Box xs={6} />
          <Box xs={7} />
          <Box xs={8} />
          <Box xs={9} />
          <Box xs={10} />
          <Box xs={11} />
          <Box xs={12} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the sm property set.
      </p>
        <Container direction="vertical">
          <Box sm={1} />
          <Box sm={2} />
          <Box sm={3} />
          <Box sm={4} />
          <Box sm={5} />
          <Box sm={6} />
          <Box sm={7} />
          <Box sm={8} />
          <Box sm={9} />
          <Box sm={10} />
          <Box sm={11} />
          <Box sm={12} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the md property set.
        </p>
        <Container direction="vertical">
          <Box md={1} />
          <Box md={2} />
          <Box md={3} />
          <Box md={4} />
          <Box md={5} />
          <Box md={6} />
          <Box md={7} />
          <Box md={8} />
          <Box md={9} />
          <Box md={10} />
          <Box md={11} />
          <Box md={12} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the lg property set.
      </p>
        <Container direction="vertical">
          <Box lg={1} />
          <Box lg={2} />
          <Box lg={3} />
          <Box lg={4} />
          <Box lg={5} />
          <Box lg={6} />
          <Box lg={7} />
          <Box lg={8} />
          <Box lg={9} />
          <Box lg={10} />
          <Box lg={11} />
          <Box lg={12} />
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
        <Container>
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
        <Container>
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
        <Container>
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
        <Container>
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


storiesOf('Horizontal Boxes', module)
  .add('Box Sizes (xs)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the xs property set.
      </p>
        <Container direction="horizontal">
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
          <Box xs={1} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (sm)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the sm property set.
      </p>
        <Container direction="horizontal">
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
          <Box sm={1} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (md)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the md property set.
        </p>
        <Container direction="horizontal">
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
          <Box md={1} />
        </Container>
      </Section>
    </LayoutProvider>
  ))
  .add('Box Sizes (lg)', () => (
    <LayoutProvider debug={{ enabled: true }} gutter={10}>
      <Section>
        <p>
          These boxes have only have the lg property set.
      </p>
        <Container direction="horizontal">
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
          <Box lg={1} />
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
          <Box>Header</Box>
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
          <Box>Footer</Box>
        </Container>
      </Section>
    </LayoutProvider>
  ));

storiesOf('Layout Examples', module)
  .add('Notifications', () => (
    <LayoutProvider debug={{ enabled: false }} gutter={20}>
      <Section absolute top="0" bottom="0" right="0" width="250px">
        <Container direction="vertical">
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
          <Box>
            <Notification>This is a notification</Notification>
          </Box>
        </Container>
      </Section>
    </LayoutProvider>
  ));
