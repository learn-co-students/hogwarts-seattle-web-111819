import React, {Component} from 'react'

export default class FilterSort extends Component {
    handleFilter = () => {
        this.props.changeFilter(!this.props.filter)
    }
    handleSort = e => {
        console.log(e.target.value)
        this.props.changeSort(e.target.value)
    }
    render() {
        return (
            <div className='filterBar'>
                <div style={{margin: '10px'}}>
                    <button onClick={this.handleFilter}>{this.props.filter ? 'Clear Filter' : 'Filter: Greased'}</button>
                </div>
                <div style={{margin: '10px'}}>
                    <select onChange={this.handleSort}>
                        <option value={0}>Sort: None</option>
                        <option value={1}>Sort: Name (Asc)</option>
                        <option value={2}>Sort: Name (Desc)</option>                    
                    </select>
                </div>
            </div>
        )
    }
}