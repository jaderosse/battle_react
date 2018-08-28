import React, {Component} from 'react';
import Socket from './socket.js';


class BoardCell extends Component {
	render(){
		return (
			<Socket />
		)
	}
}

export default BoardCell;