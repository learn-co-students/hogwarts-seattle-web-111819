import React, {Component} from 'react'
import Hog from './Hog'
import { Z_BLOCK } from 'zlib'

export default class HogBar extends Component {

    displayPiggies = () => this.props.hogs.map(hog => < Hog hog={hog} focus={this.props.focus} changeFocus={this.props.changeFocus}/>)
    
    render() {
        return (
            <div className='indexWrapper'>
                {this.displayPiggies()}
            </div>
        )
    }
}