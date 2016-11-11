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


[View a landing page built with Hedron](https://jsbros.github.io/uigradients/).


## Installation

    npm install --save hedron
or better yet

    yarn add hedron


## Example Usage

``` jsx
import React, { Component } from 'react';
import { Row, Column, utils } from 'hedron';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  };
}
```

## Contributing

First of all, thanks for your interest in contributing to hedron. If you're wanting to make a contribution and not sure what to do, take a look at the [issue tracker](https://github.com/JSBros/hedron/issues) and look at the tasks labeled with `help wanted`.

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

