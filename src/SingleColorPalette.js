import React, {Component} from 'react';
import ColorBox from './ColorBox';

export class SingleColorPalette extends Component {
  state = {
    _shades: this.gatherShades(this.props.palette, this.props.colorId),
  };

  gatherShades(palette, colorToFilterBy) {
    // return all shades of given color
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }
  render() {
    const colorBoxes = this.state._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <h1>Single Color Palette!</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
