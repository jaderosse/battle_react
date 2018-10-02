import React, {Component} from 'react';
import Socket from './socket.js';


class Board extends Component {
	render(){
	let cells = [];
  	for (let i = 1; i <= 9; i++) {
    	cells.push(<Socket value={i} />);
  	}
		return (
			<div>
				{cells}
			</div>
		)
	}
}

export default Board;