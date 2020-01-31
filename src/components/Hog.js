import React, {Component} from 'react'

export default class Hog extends Component {
    render() {
        return (
            <div 
                className="pigTile" 
                style={{
                    backgroundImage: `url(${require("../hog-imgs/" + this.props.hog.name.toLowerCase().replace(/\s+/g, '_') + ".jpg")})`, 
                    backgroundSize: 'cover'
                }} 
                alt="blah">
                <h3>{this.props.hog.name}</h3>
            </div>
        )
    }
}