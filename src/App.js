import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalate} from './ColorHelpers';

export class App extends Component {
  render() {
    console.log(generatePalate(seedColors[4]));
    return (
      <div>
        <Palette {...seedColors[1]} />
      </div>
    );
  }
}

export default App;
