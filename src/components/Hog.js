import React, {Component} from 'react'

export default class Hog extends Component {
    handleFocus = () => {
        this.props.changeFocus(this.props.hog.name)
    }
    showHogData = () => {
        const {name, specialty, weight, greased, 'highest medal achieved' : highest} = this.props.hog
        if (this.props.focus === name) {
            return <div style={{marginTop: '65px'}}>
                <h3>Specialty: {specialty}</h3>
                <h3>Greased: {greased.toString()}</h3>
                <h3>Weight: {weight}</h3>
                <h3>Highest Medal Achieved: {highest}</h3>
            </div>
        }
    }
    render() {
        return (
            <div 
                className="pigTile" 
                style={{
                    backgroundImage: `url(${require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/\s+/g, '_') + ".jpg")})`, 
                    backgroundSize: 'cover'
                }} 
                alt="blah"
                onClick={this.handleFocus}>
                <h3>{this.props.hog.name}</h3>
                {this.showHogData()}
            </div>
        )
    }
}