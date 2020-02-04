import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'



class App extends Component {
  state = {
    hogs: hogs,
    filtered: false 
  }


  displayWeight = (hog) => {
    return hog.weight
  }

  // filterGreased = () => {
  //   const greasedHogs = this.state.hogs.filter(hog => hog.greased)
  //   this.setState({
  //     hogs: greasedHogs
  //   })
  // }

  //toggle state on click
  filterGreased = () => {
    this.setState(prevState => ({
      filtered: !prevState.filtered
    }))
  }

  // function to filter based on state of this.state.filter
  filterHogCards = () =>  {
    if (this.state.filtered) {
    return this.state.hogs.filter(hog => hog.greased)
    } else {
      return this.state.hogs
    }
  }


  sortByName = () => {
    const orderByNameHogs = this.state.hogs.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      hogs: orderByNameHogs
    })
  }

  sortByWeight = () => {
    const orderByWeight = this.state.hogs.sort(function (a, b) {
      return a.weight - b.weight
    })
    this.setState({
      hogs: orderByWeight
    })
  }


  
  render() {
    return (
      <div className="App">
          < Nav filterGreased={this.filterGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight} filteredState={this.state.filtered}/>
          < HogsContainer hogs={this.filterHogCards()}/>
      </div>
    )
  }
}

export default App;
