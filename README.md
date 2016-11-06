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


[View the original CodePen that started it](http://codepen.io/garetmckinley/pen/qqWrYP/).


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
    <Row>
      <Column sm={8} smShift={2} lg={6} lgShift={3}>
        <h1>This is a column that's centered using the shift props</h1>
      </Column>
    </Row>
  };
}
```
