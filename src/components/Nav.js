import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br/><br/>
			<button onClick={ () => props.filterGreased()}>Show { props.filteredState ? "All" : "Greased"  } Hogs</button><br/><br/>

			<button onClick={() => props.sortByName()}>Sort Hogs by Name</button><br/><br/>
			<button onClick={() => props.sortByWeight()}>Sort Hogs by Weight</button>
		</div>
	)
}

export default Nav
