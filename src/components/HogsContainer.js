import React, { Component } from 'react'
import Hog from './Hog.js'

export default class HogsContainer extends Component {
  
  everyHog = () => {
    return this.props.hogs.map((hog, index) => {
      return <Hog hog={hog} key={index}/>
    })
  }

  render() {
    return(
      <div className="ui grid container">
        {this.everyHog()}
      </div>
      
    )
  }
}

