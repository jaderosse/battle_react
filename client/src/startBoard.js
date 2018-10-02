import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Socket from './socket';

//have link show up after n selections
//onclick function appends e.target to board then to socket

class StartBoard extends Component {
	render(){
	return(
		<div>
			<h1>each one i guess</h1>
			<Link to="/game">Start</Link>
		</div>
		)
	}
}


export default StartBoard;