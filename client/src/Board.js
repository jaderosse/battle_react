import React, {Component} from 'react';
import Socket from './socket.js';


class Board extends Component {
	constructor(){
		super();
		this.state = {
			squares: Array(64).fill(null)
			}
		}
	
	renderCell(i){
		return <Socket position={this.state.squares[i]} />
	}

	render(){
			return (
				<div>
					{this.renderCell(19)}
				</div>
			)
	}
}

export default Board;