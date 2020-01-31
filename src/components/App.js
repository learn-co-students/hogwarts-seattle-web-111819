import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCards from './HogCards'

class App extends Component {

  state = {
    hogs: hogs
  }
  
  orderByWeight = (hogs) => {
    //order by least to heaviest
    console.log(hogs)
    let weightSort = hogs.sort((a,b) => {return (a.weight - b.weight)})
    console.log(weightSort)
    this.setState({
      hogs: weightSort
    })
  }

  orderByName = (hogs) => {
    console.log(hogs)
    let nameSort = hogs.sort((a, b) => {return a.name.localeCompare(b.name)})
    console.log(nameSort)
    this.setState({
      hogs: nameSort
    })
  }

  greasedFilter = (hogs) => {
    let filteredHogs = hogs.filter(hog => {return hog.greased === true} )
    console.log(filteredHogs)
    this.setState({
      hogs: filteredHogs
    })
    // console.log(this.state.hogs)
  }


  render() {
    return (
      <div className="App">
            {console.log(this.state.hogs)}
          < Nav hogs={this.state.hogs} orderByWeight={this.orderByWeight} orderByName={this.orderByName} greasedFilter={this.greasedFilter}/>
          < HogCards hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
