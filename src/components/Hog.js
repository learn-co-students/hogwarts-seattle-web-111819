import React, { Component } from 'react'

export default class Hog extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
    }

    handleHogClick = () => {
        this.setState (prevState => ({
            clicked: !prevState.clicked
        }))
    }

    render () {
    return (
        <div className="ui eight wide column" onClick={() => this.handleHogClick()}>
            <h3>{this.props.hog.name}</h3>
            <img src={require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/\s+/g, '_') + ".jpg")} alt="blah"/><br></br>
            <p>{this.state.clicked ? this.props.hog.weight : ""}</p>
            <p>{this.state.clicked ? this.props.hog.specialty : ""}</p>
            <p>{this.state.clicked && this.props.hog.greased ? "Greased!" : ""}</p>
            <p>{this.state.clicked ? this.props.hog['highest medal achieved'] : ""}</p>
            
        </div>
    )
    }
}