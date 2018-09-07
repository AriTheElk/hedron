<p align="center">
  <img src="http://i.imgur.com/1f9IIN8.png">
</p>

[![Travis](https://img.shields.io/travis/garetmckinley/hedron.svg?style=flat-square)](https://travis-ci.org/garetmckinley/hedron) [![npm](https://img.shields.io/npm/dt/hedron.svg?style=flat-square)](https://www.npmjs.com/package/hedron) [![David](https://img.shields.io/david/garetmckinley/hedron.svg?style=flat-square)](https://github.com/garetmckinley/hedron/issues) [![Spectrum Chat](https://camo.githubusercontent.com/3cc3d27f23a2c3948de24fc02c58bc576655d621/68747470733a2f2f77697468737065637472756d2e6769746875622e696f2f62616467652f62616467652e737667)](https://spectrum.chat/hedron)

## Quick Jump

1. [Features](#features)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Upgrading from Pre-1.0](#upgrading)
6. [Documentation](#documentation)
   1. [`Grid.Provider`](#gridprovider)
   2. [`Grid.Bounds`](#gridbounds)
   3. [`Grid.Box`](#gridbox)

## Features

- Add unlimited breakpoints
- Any property can be altered by a breakpoint
- Debug mode that allows easy visualization of your layout

## Requirements

The follow dependencies must be installed in your project in order for hedron to work.

- [`styled-components`](https://github.com/styled-components/styled-components) 1.1.3 and up

## Installation

#### Using yarn

```bash
yarn add hedron@next
```

#### Using npm

```bash
npm install hedron@next
```

## Usage

#### Basic Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "hedron";

const App = () => (
  <Grid.Bounds direction="vertical">
    <Grid.Box>Header</Grid.Box>
    <Grid.Box>Content</Grid.Box>
    <Grid.Box>Footer</Grid.Box>
  </Grid.Bounds>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

#### Responsive Example

To make your layout responsive, use the `Grid.Provider` to define breakpoints. You can add as many or as few breakpoints as you'd like.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "hedron";

const App = () => (
  <Grid.Provider
    padding="20px"
    breakpoints={{ sm: "-500", md: "501-750", lg: "+750" }}
  >
    <Grid.Bounds direction="vertical">
      <Grid.Box sm={{ hidden: true }}>
        This header hides on small screens
      </Grid.Box>
      <Grid.Box>Content</Grid.Box>
      <Grid.Box lg={{ padding: "50px" }}>
        This footer gains extra padding on large screens
      </Grid.Box>
    </Grid.Bounds>
  </Grid.Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

If you want to be more verbose with your naming convention, that's perfectly fine too! Go ahead and name your breakpoints whatever feels right

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Grid from "hedron";

const App = () => (
  <Grid.Provider
    breakpoints={{ mobile: "-500", tablet: "501-750", wide: "+750" }}
  >
    <Grid.Bounds direction="vertical">
      <Grid.Box mobile={{ hidden: true }}>Header</Grid.Box>
      <Grid.Box>Content</Grid.Box>
      <Grid.Bounds direction="vertical" wide={{ direction: "horizontal" }}>
        <Grid.Box>These boxes render side by side on wide screens</Grid.Box>
        <Grid.Box>These boxes render side by side on wide screens</Grid.Box>
      </Grid.Bounds>
    </Grid.Bounds>
  </Grid.Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

You don't need to fill all screen sizes either, if you only need elements to change on a single resolution, just add a single breakpoint! To learn more about breakpoints, check out the documentation for [`Grid.Provider`](#gridprovider).

## Upgrading

Unfortunately, there's no simple way to upgrade from the pre 1.0.0 version, but here's a few tips to make your life easier if you decide to upgrade (which we recommend doing!)

- The `Page` and `Section` components have been retired. In an effort to simplify, there are only two main components now with one `Provider` that helps configure the global grid.
- `Row` has been replaced by [`Grid.Bounds`](#gridbounds). This change was made because `Row` implies that it can only go in one direction, while `Grid.Bounds` is capable of arranging children either horizontally or vertically.
- `Column` has been replaced by [`Grid.Box`](#gridbox). Again, this change was made because `Column` implies it only goes in one direction.
- `BreakpointProvider` has been replaced by [`Grid.Provider`](#gridprovider). It was changed because it's can set more than just breakpoints.

**Also:** There are no longer default breakpoints. You must define breakpoints yourself via [`Grid.Provider`](#gridprovider). You can also _finally_ set custom breakpoints, as many as you want!

## Documentation

### `Grid.Provider`

#### Props

- `padding`: `string` - structure: `20px`
  - Default padding to use for child `Grid.Box` components
- `breakpoints`: `{ key: string }` - structure: `{ name: query }`
  - Breakpoints for setting resolution-specific properties on child `Grid.Box` components. Here's a basic outline for writing breakpoint queries:
    - `-500` means that the breakpoint will trigger at 500px and smaller
    - `250-800` means that the breakpoint will trigger between 250px and 800px
    - `+900` means that the breakpoint will trigger at 900px and larger

<details><summary><strong>Defining Breakpoints</strong></summary><p>

Defining breakpoints gives you strong control over the way your content is rendered at various screen sizes. Any property that can be set on `Grid.Box` can be set per-breakpoint. Here's a few things to keep in mind when defining breakpoints:

- Breakpoints can be named whatever you'd like (with a few exceptions laid out in the next section)
- When defining breakpoints, you must pass an array object containing **only** two values: the min and max (both must be integers)
- Breakpoints can have overlapping values. Use responsibly though, as it's possible to produce unexpected results when setting conflicting values on a `Grid.Box` with overlapping breakpoints. i.e. if `mobile` and `tablet` have overlapping pixels, don't make a `Grid.Box` hide on mobile and show on tablet.

</p></details>

<details><summary><strong>Restricted Breakpoint Names</strong></summary><p>

Although you can name breakpoints whatever you want, there are a few names that we do not recommend using because they will conflict with existing property names. Most of these are pretty obvious and would never come up in real usage, but it's worth having a list here just to be sure!

- `background`
- `border`
- `checked`
- `className`
- `dangerouslySetInnerHTML`
- `display`
- `height`
- `hidden`
- `htmlFor`
- `margin`
- `onChange`
- `opacity`
- `padding`
- `selected`
- `style`
- `suppressContentEditableWarning`
- `suppressHydrationWarning`
- `value`
- `visibility`
- `width`

</p></details>

### `Grid.Bounds`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `string` - structure: `grow shrink basis`
  - Controls the CSS `flex` property
- `direction`: `string` - `horizontal` or `vertical`
  - Sets the primary axis the children should be in line with
- `wrap`: `boolean`
  - Sets whether the children should wrap when there's no more room on the primary axis
- `valign`: `string` - `top`, `center`, or `bottom`
  - Alignment of children along the vertical axis
- `halign`: `string` - `left`, `center`, or `right`
  - Alignment of children along the horizontal axis

`Grid.Bounds` also inherits all properties that [`Stylable`](https://github.com/tetrahedron/core#stylable) has.

### `Grid.Box`

#### Props

- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `debug` : `boolean`
  - Outlines the grid system so you can visualize the layout
- `flex`: `string` - structure: `grow shrink basis`
  - Controls the CSS `flex` property
- `fill`: `boolean`
  - Sets whether the `Box` should fill up all available space
- `fluid`: `boolean`
  - Convenience property for disabling padding
- `shiftRight`: `boolean`
  - Shifts the box to the right of the parent `Bounds`
- `shiftLeft`: `boolean`
  - Shifts the box to the ;eft of the parent `Bounds`
- `shiftUp`: `boolean`
  - Shifts the box to the top of the parent `Bounds`
- `shiftDown`: `boolean`
  - Shifts the box to the bottom of the parent `Bounds`

`Grid.Box` also inherits all properties that [`Stylable`](https://github.com/tetrahedron/core#stylable) has.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#-all-contributors-)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars.githubusercontent.com/u/1624279?v=3" width="100px;"/><br /><sub>Garet McKinley</sub>](https://github.com/garetmckinley)<br />[💻](https://github.com/garetmckinley/hedron/commits?author=garetmckinley) 💡 ⚠️ 👀 | [<img src="https://avatars.githubusercontent.com/u/11802078?v=3" width="100px;"/><br /><sub>Matt Hamil</sub>](https://github.com/matthamil)<br /> 💬 | [<img src="https://avatars.githubusercontent.com/u/77391?v=3" width="100px;"/><br /><sub>Mikko Matilainen</sub>](https://github.com/mikkom)<br />[💻](https://github.com/garetmckinley/hedron/commits?author=mikkom) | [<img src="https://avatars.githubusercontent.com/u/16616772?v=3" width="100px;"/><br /><sub>Nathaniel Piché</sub>](https://github.com/nathanielpiche)<br />[💻](https://github.com/garetmckinley/hedron/commits?author=nathanielpiche) 📖 | [<img src="https://avatars.githubusercontent.com/u/233396?v=3" width="100px;"/><br /><sub>Brian Stanback</sub>](https://github.com/Stanback)<br />[💻](https://github.com/garetmckinley/hedron/commits?author=Stanback) | [<img src="https://avatars.githubusercontent.com/u/571265?v=3" width="100px;"/><br /><sub>Stephen Mathieson</sub>](https://github.com/stephenmathieson)<br />[💻](https://github.com/garetmckinley/hedron/commits?author=stephenmathieson) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

Want to help? Join our [Spectrum.chat community](https://spectrum.chat/hedron) to get started!

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/hedron#backer)]

<a href="https://opencollective.com/hedron/backer/0/website" target="_blank"><img src="https://opencollective.com/hedron/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/1/website" target="_blank"><img src="https://opencollective.com/hedron/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/2/website" target="_blank"><img src="https://opencollective.com/hedron/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/3/website" target="_blank"><img src="https://opencollective.com/hedron/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/4/website" target="_blank"><img src="https://opencollective.com/hedron/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/5/website" target="_blank"><img src="https://opencollective.com/hedron/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/6/website" target="_blank"><img src="https://opencollective.com/hedron/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/7/website" target="_blank"><img src="https://opencollective.com/hedron/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/8/website" target="_blank"><img src="https://opencollective.com/hedron/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/9/website" target="_blank"><img src="https://opencollective.com/hedron/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/10/website" target="_blank"><img src="https://opencollective.com/hedron/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/11/website" target="_blank"><img src="https://opencollective.com/hedron/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/12/website" target="_blank"><img src="https://opencollective.com/hedron/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/13/website" target="_blank"><img src="https://opencollective.com/hedron/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/14/website" target="_blank"><img src="https://opencollective.com/hedron/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/15/website" target="_blank"><img src="https://opencollective.com/hedron/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/16/website" target="_blank"><img src="https://opencollective.com/hedron/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/17/website" target="_blank"><img src="https://opencollective.com/hedron/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/18/website" target="_blank"><img src="https://opencollective.com/hedron/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/19/website" target="_blank"><img src="https://opencollective.com/hedron/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/20/website" target="_blank"><img src="https://opencollective.com/hedron/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/21/website" target="_blank"><img src="https://opencollective.com/hedron/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/22/website" target="_blank"><img src="https://opencollective.com/hedron/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/23/website" target="_blank"><img src="https://opencollective.com/hedron/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/24/website" target="_blank"><img src="https://opencollective.com/hedron/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/25/website" target="_blank"><img src="https://opencollective.com/hedron/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/26/website" target="_blank"><img src="https://opencollective.com/hedron/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/27/website" target="_blank"><img src="https://opencollective.com/hedron/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/28/website" target="_blank"><img src="https://opencollective.com/hedron/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/hedron/backer/29/website" target="_blank"><img src="https://opencollective.com/hedron/backer/29/avatar.svg"></a>

## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/hedron#sponsor)]

[![sponsored by timber](https://res.cloudinary.com/timber/image/upload/v1490556810/pricing/sponsorship.png)](http://timber.io/?utm_source=github&utm_medium=docs&utm_campaign=hedron)
<a href="https://opencollective.com/hedron/sponsor/0/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/1/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/2/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/3/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/4/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/5/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/6/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/7/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/8/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/hedron/sponsor/9/website" target="_blank"><img src="https://opencollective.com/hedron/sponsor/9/avatar.svg"></a>

## License

MIT
