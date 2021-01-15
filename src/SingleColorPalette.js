import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './NavBar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';

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
    const {classes} = this.props;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this.state._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
