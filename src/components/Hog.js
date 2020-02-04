import React, { Component} from 'react'


class Hog extends Component{
  constructor(){
    super()
    this.state={
      clicked: false
    }
  }
    handleHogClick = () => {
      this.setState(prevState => ({
        clicked: !prevState.clicked
      }))
    }
  
  render() {
    return(
      <div className="ui eight wide column" onClick={ () => this.handleHogClick()}>
        <h1>{this.props.hog.name}</h1>
        <img src={require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/\s+/g, '_') + ".jpg")} alt="blah"/>
        <p>{this.state.clicked ? `${this.props.hog.weight + ' lbs.'}` : " "}</p>
        <p>{this.state.clicked ? this.props.hog.specialty : " "}</p>
        <p>{this.state.clicked && this.props.hog.greased ? "GREASED! ew!": " "}</p>
        <p>{this.state.clicked ? this.props.hog['highest medal achieved'] : " "}</p>

        <br></br>

      </div>
    ) 
}

}
export default Hog