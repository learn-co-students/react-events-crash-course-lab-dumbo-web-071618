import React, { Component } from 'react';
import { drawChromeBoiAtCoords, resize } from './canvasHelpers.js'
import './canvasHelpers.css';



export default class ChromeBoisDomain extends Component {
  constructor(){
    super()
    this.state = {
      imgPNG: "http://localhost:3000/1.png",
      mouseDown: false,
      percentage: 1,
      emoji: {
        animation: ""
      }
    }
  }



  percentageIncrease = () => {
    this.setState(prevState => {
      return {percentage: prevState.percentage + 1}
    })
  }


  handleKeyDown = (event) => {
    if (event.key === "2"){
      resize("+")
    }
    if (event.key === "1"){
      resize("-")
    }
  }

  handleEmojiSelect = (event) => {
    let id = event.target.id

    this.setState({imgPNG: `http://localhost:3000/${id}.png`})

    this.setState({emoji: {animation: ""}})

  }

  handleAnimateSelect = (event) => {
    console.log(event.target.id);
    this.setState({emoji: {animation: event.target.id}},() => {
    })
  }

  percentageReset = () =>{
    this.setState({percentage: 2})
  }

  handleMouseDown = (event) => {
    this.percentageReset()
    this.setState(prevState => {
      return {mouseDown: !prevState.mouseDown}
    })
  }

  handleMouseUp = (event) => {
    this.percentageReset()
    this.setState(prevState => {
      return {mouseDown: !prevState.mouseDown}
    })
  }

  handleMouseMove = (event) => {
    this.percentageIncrease()
    if (this.state.mouseDown){
      if(this.state.percentage % 2 === 0){
        drawChromeBoiAtCoords(event.clientX, event.clientY, this.state.imgPNG, this.state.emoji.animation)
      }
    }
  }


  render() {
    return (
    <div>
    <div>
      <canvas
        onMouseMove={this.handleMouseMove}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onKeyDown={this.handleKeyDown}
        width='955'
        height='600'
        tabIndex="0">
      </canvas>

      </div>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>
      <text> <br></br> </text>

      <div class="container" >
        <img id = "1" src="1.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "2" src="2.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "3" src="3.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "4" src="4.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "5" src="5.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "6" src="6.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "7" src="7.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "8" src="8.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "9" src="9.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "10" src="10.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "11" src="11.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "12" src="12.png" alt=""onClick={this.handleEmojiSelect}/>
        <text> <br></br> </text>

        <img id = "13" src="13.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "14" src="14.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "15" src="15.png" alt=""onClick={this.handleEmojiSelect}/>

        <img id = "16" src="16.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "17" src="17.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "18" src="18.png" alt=""onClick={this.handleEmojiSelect}/>

        <img id = "19" src="19.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "20" src="20.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "21" src="21.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "22" src="22.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "23" src="23.png" alt=""onClick={this.handleEmojiSelect}/>
        <img id = "24" src="24.png" alt=""onClick={this.handleEmojiSelect}/>

        <text> <br></br> </text>
        <text> <br></br> </text>

        <img class = "animation" id = "horizontal" src="horizontal.svg" alt=""onClick={this.handleAnimateSelect}/>

        <img class = "animation" id = "vertical" src="vertical.svg" alt=""onClick={this.handleAnimateSelect}/>

        <img className = "App-logo" id = "App-logo" src="clockwise.svg" alt=""onClick={this.handleAnimateSelect}/>


      </div>
    </div>

    )
  }
}
