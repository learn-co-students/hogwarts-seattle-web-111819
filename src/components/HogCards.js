import React, { Component } from "react";
import Hog from './Hog'
export default class HogCards extends Component {

  mapHogs = () => {
    return this.props.hogs.map(hog => {
    return <div className="ui eight wide column"><Hog hog={hog}/></div>
    })
  }

  render() {
    return(
      <div className="ui grid container">{this.mapHogs()}
      </div>

    )
  }
}