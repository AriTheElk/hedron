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

[![Backers on Open Collective](https://opencollective.com/hedron/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/hedron/sponsors/badge.svg)](#sponsors) [![Travis](https://img.shields.io/travis/JSBros/hedron.svg?style=flat-square)](https://travis-ci.org/JSBros/hedron) [![npm](https://img.shields.io/npm/dt/hedron.svg?style=flat-square)](https://www.npmjs.com/package/hedron) [![David](https://img.shields.io/david/jsbros/hedron.svg?style=flat-square)](https://github.com/JSBros/hedron/issues) [![Slack Status](https://slackin-xtuseyimsc.now.sh/badge.svg)](https://slackin-xtuseyimsc.now.sh/)

[View a landing page built with Hedron](https://jsbros.github.io/uigradients/).

## Installation

    npm install --save hedron

or better yet

    yarn add hedron

## Documentation

#### [View the Documentation →](https://github.com/JSBros/hedron/wiki/Grid-System)

## Example Usage

```jsx
import React, { Component } from "react";
import { Page, Row, Column } from "hedron";

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
  }
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

In an effort to keep the git history clean, since `0.4.0` I'm enforcing a semantic commit message style.

[View the semantic commit message guidelines →](https://seesparkbox.com/foundry/semantic_commit_messages)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#-all-contributors-)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars.githubusercontent.com/u/1624279?v=3" width="100px;"/><br /><sub>Garet McKinley</sub>](https://github.com/garetmckinley)<br />[💻](https://github.com/JSBros/hedron/commits?author=garetmckinley) 💡 ⚠️ 👀 | [<img src="https://avatars.githubusercontent.com/u/11802078?v=3" width="100px;"/><br /><sub>Matt Hamil</sub>](https://github.com/matthamil)<br /> 💬 | [<img src="https://avatars.githubusercontent.com/u/77391?v=3" width="100px;"/><br /><sub>Mikko Matilainen</sub>](https://github.com/mikkom)<br />[💻](https://github.com/JSBros/hedron/commits?author=mikkom) | [<img src="https://avatars.githubusercontent.com/u/16616772?v=3" width="100px;"/><br /><sub>Nathaniel Piché</sub>](https://github.com/nathanielpiche)<br />[💻](https://github.com/JSBros/hedron/commits?author=nathanielpiche) 📖 | [<img src="https://avatars.githubusercontent.com/u/233396?v=3" width="100px;"/><br /><sub>Brian Stanback</sub>](https://github.com/Stanback)<br />[💻](https://github.com/JSBros/hedron/commits?author=Stanback) | [<img src="https://avatars.githubusercontent.com/u/571265?v=3" width="100px;"/><br /><sub>Stephen Mathieson</sub>](https://github.com/stephenmathieson)<br />[💻](https://github.com/JSBros/hedron/commits?author=stephenmathieson) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind are welcome!

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

Hedron is under the [MIT](LICENSE) License.
