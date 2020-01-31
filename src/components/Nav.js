import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br></br>
			<button onClick={() => props.orderByName(props.hogs)}>Sort By Name</button>
			<button onClick={() => props.orderByWeight(props.hogs)}>Sort By Weight</button>
			<button onClick={() => props.greasedFilter(props.hogs)}>Greased?</button>
		</div>
	)
}

export default Nav
