import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './NavBar';
import './Palette.css';

export class Palette extends Component {
  state = {
    level: 500,
    format: 'hex',
  };
  changeLevel = this.changeLevel.bind(this);
  changeFormat = this.changeFormat.bind(this);

  changeFormat(val) {
    this.setState({format: val});
  }

  changeLevel(level) {
    this.setState({level});
  }

  render() {
    const {colors} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        {/* NavBar goes here */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
