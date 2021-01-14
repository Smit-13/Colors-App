import React, {Component} from 'react';
import Navbar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import Palette from './Palette';

export class SingleColorPalette extends Component {
  state = {
    _shades: this.gatherShades(this.props.palette, this.props.colorId),
    format: 'hex',
  };

  changeFormat = this.changeFormat.bind(this);

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

  changeFormat(val) {
    this.setState({format: val});
  }

  render() {
    const {format} = this.state;
    const {paletteName, emoji} = this.props.palette;
    const colorBoxes = this.state._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
