import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterSort from './FilterSort'
import HogBar from './HogBar'
import HogShow from './HogShow'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      sort: 0,
      filter: false
    }
  }
  
  changeFilter = n => this.setState({filter: n})
  
  changeSort = n => this.setState({sort: n})
  
  filterAndSort = () => {
    let {hogs, sort, filter} = this.state
    let newHogs = hogs
    if (sort === '1') {
      newHogs = hogs.sort((a, b) => a.name < b.name ? -1 : 1)
    } else if (sort === '2') {
      newHogs = hogs.sort((a, b) => a.name < b.name ? 1 : -1)
    }
    if (filter) {
      return newHogs.reduce((m, hog) => hog.greased ? m.concat(hog) : m, [])
    }
    return newHogs
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < FilterSort filter={this.state.filter} sort={this.state.sort} changeFilter={this.changeFilter} changeSort={this.changeSort}/>
          < HogShow hog={this.filterAndSort()[0]}/>
          < HogBar hogs={this.filterAndSort()}/>
      </div>
    )
  }
}

export default App;
