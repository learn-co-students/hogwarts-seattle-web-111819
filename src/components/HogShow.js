import React, {Component} from 'react'

export default class HogShow extends Component {
    render() {
        const {name, specialty, weight, greased, 'highest medal achieved' : highest} = this.props.hog
        return (
            <div style={{width: '400px', border: '1px solid black', margin: 'auto'}}>
                <p>Name: {name}</p>
                <p>Specialty: {specialty}</p>
                <p>Greased?: {greased}</p>
                <p>Weight: {weight}</p>
                <p>Highest Medal Achieved: {highest}</p>
            </div>
        )
    }
}