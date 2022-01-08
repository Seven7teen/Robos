import React, { Component } from 'react';
import CardList from '../components/cardlist';
// import { robots } from './robots.js';
import SearchBox from '../components/searchBox';
import './App.css';
import ErrorBoundary from '../components/errorBoundary.js';
import Scroll from '../components/scroll.js';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
		// 	return response.json();
		// })
		// .then(users => {
		// 	this.setState({robots: users})
		// });

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots: users})});

	}

	onSearchChange = (event) => {
		// this.state.searchfield = event.target.value
		this.setState({ searchfield: event.target.value })
		
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		console.log(filteredRobots);
		if(this.state.robots.length === 0) {
			return <h1>Loading</h1>
		}
		else {
			return (
				<div className = 'tc'>
					<h1 className = 'f2'>ROBOFRIENDS</h1>
					<SearchBox searchChange = { this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots= { filteredRobots }/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}


export default App;