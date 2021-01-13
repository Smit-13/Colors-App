import React, {Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalate} from './ColorHelpers';

export class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalate(seedColors[2])} />
      </div>
    );
  }
}

export default App;
