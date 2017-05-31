import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import { Section, Container, Box, Hidden, LayoutProvider } from '../src';
import Notification from './Notification';
import Welcome from './Welcome';
import VSCode from './Examples/VSCode';
import Notifications from './Examples/Notifications';
import Sidebar from './Examples/Sidebar';
import { injectGlobal } from 'styled-components';
import Highlight from 'react-highlight'

const Link = ({ to, ...props }) => <a onClick={ linkTo(...to) } style={{ cursor: 'pointer' }} {...props}></a>;

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

storiesOf('General', module)
  .add('Welcome', () => (
    <Welcome />
  ));

storiesOf('Box', module)
  .add('grow', () => (
    <LayoutProvider debug={{ enabled: false }} gutter={10}>
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Using grow</h2>
        <h4>Grow tells boxes to take up all remaining whitespace</h4>
        <Section>
          <Container direction="vertical">
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
          </Container>
        </Section>
        <h4>If there's multiple growing boxes, the grid is divided equally</h4>
        <Section>
          <Container direction="horizontal">
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
          </Container>
        </Section>
        <h4>If some have fixed widths, the growing boxes will take that into consideration</h4>
        <Section>
          <Container direction="horizontal">
            <Box width="150px"><Highlight>{`width="150px"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="40%"><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
          </Container>
        </Section>
        <h4>This works great combined with the <Link to={['Container', 'wrap']}>wrap</Link> property</h4>
        <Section>
          <Container direction="horizontal" wrap>
            <Box width="20%"><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="40%"><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="20%"><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="40%"><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="20%"><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
            <Box width="40%"><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow={1}><Highlight>{`grow={1}`}</Highlight></Box>
          </Container>
        </Section>
      </Section>
    </LayoutProvider>
  ))
  .add('shift', () => (
    <LayoutProvider debug={{ enabled: false }} gutter={10}>
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Using shift</h2>
        <h4>Shift adds a left margin on boxes</h4>
        <Section>
          <Container direction="vertical">
            <Box shift="100px"><Highlight>{`shift="100px"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>Use auto to shift all the way to the right</h4>
        <Section>
          <Container direction="vertical">
            <Box shift="auto"><Highlight>{`shift="auto"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>You can change the shift on a specific breakpoint</h4>
        <Section>
          <Container direction="vertical">
            <Box shift={{ md: "50%" }}><Highlight>{`shift={{ md: "50%" }}"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>This can be combined with other boxes</h4>
        <Section>
          <Container direction="horizontal">
            <Box width="150px"><Highlight>{`width="150px"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box shift={{ md: "auto" }}><Highlight>{`shift={{ md: "auto" }}`}</Highlight></Box>
          </Container>
        </Section>
      </Section>
    </LayoutProvider>
  ))
  .add('width', () => (
    <LayoutProvider debug={{ enabled: false }} gutter={10}>
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Setting widths</h2>
        <h4>You can define it as a percentage</h4>
        <Section>
          <Container direction="vertical">
            <Box width="100%"><Highlight>{`width="100%"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>Or as pixels</h4>
        <Section>
          <Container direction="vertical">
            <Box width="250px"><Highlight>{`width="250px"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>You can also pass an object, if you want to affect specific breakpoints</h4>
        <Section>
          <Container direction="vertical">
            <Box width={{ xs: "100%", sm: "85%", md: "75%", lg: "520px" }}><Highlight>{`width={{ xs: "100%", sm: "50%", md: "25%", lg: "520px" }}`}</Highlight></Box>
          </Container>
        </Section>
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

storiesOf('Layout Examples', module)
  .add('Notifications', () => (
    <Notifications />
  ))
  .add('VSCode Inspired', () => (
    <VSCode />
  ))
  .add('Sidebar', () => (
    <Sidebar/>
  ));
