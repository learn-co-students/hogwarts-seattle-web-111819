import React, { Component } from "react";
// import images from '../hog-imgs'
export default class Hog extends Component {
  state = {
    weight: "",
    specialty: "",
    greased: ""

  }

  handleClick = () => {
    this.setState({
      weight: this.props.hog.weight,
      specialty: this.props.hog.specialty,
      greased: this.props.hog.greased,
    })
  }

  render() {
    return(
      <div onClick={() => this.handleClick()}>
        {this.props.hog.name}<br></br>
        <img src={require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/\s+/g, '_') + ".jpg")} alt="blah"/><br></br>
        {this.state.specialty}<br></br>
        {this.state.weight}<br></br>
        {this.state.greased ? "I'm greased!" : ""}
      </div>
    )
  }
}