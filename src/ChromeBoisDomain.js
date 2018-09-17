import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (e) => {
    drawChromeBoiAtCoords(e.clientX, e.clientY)
  }

handleKeyPress (e) {
  if (e.key==='a') {
    resize('+')
  } else if (e.key==='s') {
    resize('-')
  }
  }

  handleClick(){
    toggleCycling()
  }

  render() {
    return (
      <canvas
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onKeyPress={(e) => this.handleKeyPress(e)}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
