
import React from 'react';
import Search from './Search';

class Main extends React.Component{
	
	constructor(props){
		
		super(props);

		this.state = {
			clicks: 0
		}

		this.handleClick = this.handleClick.bind(this);
		this.resetClick = this.resetClick.bind(this);	
	}

	handleClick(){
		this.setState({clicks: 1 + this.stat.clicks});	
	}

	resetClick(){
		this.setState({clicks: 0});
	}

	render(){

		return(
				<div className="container">
					<div className="row">

			)
	}

}