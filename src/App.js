import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import {generatePalate} from './ColorHelpers';

export class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalate(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={() => <h1>Single Color Page!</h1>}
        />
      </Switch>

      /* <div>
        <Palette palette={generatePalate(seedColors[2])} />
      </div> */
    );
  }
}

export default App;
