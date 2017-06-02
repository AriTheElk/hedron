import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import { Section, Container, Box, Hidden, LayoutProvider } from '../src';
import Notification from './Notification';
import Welcome from './Welcome';
import VSCode from './Examples/VSCode';
import Twitter from './Examples/Twitter';
import Notifications from './Examples/Notifications';
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
    overflow: auto;
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
  pre {
    margin: 0;
  }
`;

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

storiesOf('General', module)
  .add('Welcome', () => (
    <Welcome />
  ));

storiesOf('Container', module)
  .add('direction', () => (
    <LayoutProvider debug={{ enabled: false }} gutter="10px">
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Changing directions</h2>
        <h4>By default, hedron uses Container aligns children horizontally.</h4>
        <Highlight>{`<Container>...</Container>`}</Highlight>
        <Section>
          <Container>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
          </Container>
        </Section>
        <h4>If you want to be explicit, you can manually set it</h4>
        <Highlight>{`<Container direction="horizontal">...</Container>`}</Highlight>
        <Section>
          <Container direction="horizontal">
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
          </Container>
        </Section>
        <h4>Or you can align children vertically</h4>
        <Highlight>{`<Container direction="vertical">...</Container>`}</Highlight>
        <Section>
          <Container direction="vertical">
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
          </Container>
        </Section>
        <h4>You can also change direction based on breakpoints</h4>
        <Highlight>{`<Container direction={{ xs: 'vertical', md: 'horizontal' }}>...</Container>`}</Highlight>
        <Section>
          <Container direction={{ xs: 'vertical', md: 'horizontal' }}>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
            <Box grow><Highlight></Highlight></Box>
          </Container>
        </Section>
      </Section>
    </LayoutProvider>
  ))
  .add('wrap', () => (
    <LayoutProvider debug={{ enabled: false }} gutter="10px">
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Wrapping boxes</h2>
        <h4>Setting wrap causes children to wrap around when there's not enough space</h4>
        <Highlight>{`<Container wrap>...</Container>`}</Highlight>
        <Section>
          <Container wrap>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
          </Container>
        </Section>
        <h4>You can also set your container to wrap at specific breakpoints</h4>
        <Highlight>{`<Container wrap={{ xs: true, sm: false }}>...</Container>`}</Highlight>
        <Section>
          <Container wrap={{ xs: true, sm: false }}>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
            <Box width="25%"><Highlight>{`width="25%"`}</Highlight></Box>
          </Container>
        </Section>
      </Section>
    </LayoutProvider>
  ));

storiesOf('Box', module)
  .add('grow', () => (
    <LayoutProvider debug={{ enabled: false }} gutter="10px">
      <Section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atelier-estuary-dark.min.css" />
        <h2>Using grow</h2>
        <h4>Grow tells boxes to take up all remaining whitespace</h4>
        <Section>
          <Container direction="vertical">
            <Box grow><Highlight>{`grow`}</Highlight></Box>
          </Container>
        </Section>
        <h4>If there's multiple growing boxes, the grid is divided equally</h4>
        <Section>
          <Container direction="horizontal">
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
          </Container>
        </Section>
        <h4>If some have fixed widths, the growing boxes will take that into consideration</h4>
        <Section>
          <Container direction="horizontal">
            <Box width="150px"><Highlight>{`width="150px"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width="40%"><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
          </Container>
        </Section>
        <h4>This works great combined with the <Link to={['Container', 'wrap']}>wrap</Link> property</h4>
        <Section>
          <Container direction="horizontal" wrap>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="20%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
            <Box width={`${getRandomIntInclusive(10, 60)}%`}><Highlight>{`width="40%"`}</Highlight></Box>
            <Box grow><Highlight>{`grow`}</Highlight></Box>
          </Container>
        </Section>
      </Section>
    </LayoutProvider>
  ))
  .add('shift', () => (
    <LayoutProvider debug={{ enabled: false }} gutter="10px">
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
    <LayoutProvider debug={{ enabled: false }} gutter="10px">
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
  .add('Twitter', () => (
    <Twitter />
  ))
  .add('VSCode Inspired', () => (
    <VSCode />
  ));
