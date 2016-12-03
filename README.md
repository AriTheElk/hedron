```
$$\   $$\                 $$\                               
$$ |  $$ |                $$ |                              
$$ |  $$ | $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$\  $$$$$$$\  
$$$$$$$$ |$$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\ $$  __$$\ 
$$  __$$ |$$$$$$$$ |$$ /  $$ |$$ |  \__|$$ /  $$ |$$ |  $$ |
$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |$$ |  $$ |
$$ |  $$ |\$$$$$$$\ \$$$$$$$ |$$ |      \$$$$$$  |$$ |  $$ |
\__|  \__| \_______| \_______|\__|       \______/ \__|  \__|                                                                                                                                
```
[![Travis](https://img.shields.io/travis/JSBros/hedron.svg?style=flat-square)](https://travis-ci.org/JSBros/hedron) [![npm](https://img.shields.io/npm/dt/hedron.svg?style=flat-square)](https://www.npmjs.com/package/hedron) [![David](https://img.shields.io/david/jsbros/hedron.svg?style=flat-square)](https://github.com/JSBros/hedron/issues) [![Slack Status](https://slackin-xtuseyimsc.now.sh/badge.svg)](https://slackin-xtuseyimsc.now.sh/)

[View a landing page built with Hedron](https://jsbros.github.io/uigradients/).


## Installation

    npm install --save hedron
or better yet

    yarn add hedron

## Documentation

#### [View the Documentation →](https://github.com/JSBros/hedron/wiki/Grid-System)

## Example Usage

[View interactive example on webpackbin](http://www.webpackbin.com/V1zqQ_gZf)

``` jsx
import React, { Component } from 'react';
import { Page, Row, Column } from 'hedron';

class App extends Component {
  render() {
    return (
      <Page>
        <Row>
          <Column sm={8} smShift={2} lg={6} lgShift={3}>
            <h1>This is a column that's centered using the shift props</h1>
          </Column>
        </Row>
        <Row>
          <Column fluid sm={4}>
            <h1>Fluid Columns</h1>
          </Column>
          <Column fluid sm={4}>
            <p>It's a 12 column layout by default.</p>
          </Column>
          <Column fluid sm={4}>
            <Row divisions={24}>
              <Column sm={24}>
                <p>
                  But you can change the amount of columns by adding the
                  `divisions` property to a Row.
                </p>
                <p>It's fully embeddable as well!</p>
              </Column>
            </Row>
          </Column>
        </Row>
      </Page>
    );
  };
}
```

## Contributing

First of all, thanks for your interest in contributing to hedron. The best place to get started with contributing to `hedron` is to join the [JSBro Slack Team](https://595f03bc-218b-4dc7-9045-df52791c557f.sbook.io/). Once you're in the slack channel, take a look at the [issue tracker](https://github.com/JSBros/hedron/issues) and look at the tasks labeled with `help wanted`.

### Building the module from source

    $ git clone https://github.com/JSBros/hedron

To install all dependencies, you can use either npm or yarn. I personally prefer [and recommend] using [yarn](https://yarnpkg.com/en/docs/install).

#### npm

    $ npm install

#### yarn

    $ yarn install

#### Building

To build hedron from the source code, please run the following command inside the hedron directory

    $ npm run build

Before you submit a pull request, you must first make sure that the code base is passing eslint inspections. To do that, please run the following

    $ npm run lint

If all goes well, nothing spectacular should happen. If there are any errors, you'll get a lot of red output in your terminal and it will list exactly what needs to be fixed.

### Committing

In an effort to keep the git history clean, since `0.3.0` I'm enforcing an emoji based semantic commit message style. This allows for easy visual grepping of the git log.

[View the gitmoji guidelines →](https://gitmoji.carloscuesta.me)


## Authors

[Author List →](AUTHORS)

## License

Hedron is under the [MIT](LICENSE) License.

