import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class StartBoard extends Component {
	render(){
		return(
			<div>
				<h1>This is the board where it starts</h1>
				<Link to="/game">Start</Link>
			</div>
		)
	}
}


export default StartBoard;