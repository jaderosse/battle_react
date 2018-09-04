import React, {Component} from 'react';
import Socket from './socket.js';


class Board extends Component {
	render(){
		let cells = [];
  	for (let i = 0; i < 10; i++) {
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