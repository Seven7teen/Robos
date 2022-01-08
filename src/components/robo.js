import React, { Component } from 'react';
import 'tachyons';

class Robo extends Component {
	render() {
		return (
			<div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
				<img alt='robots' src={`https://robohash.org/${this.props.id}`} width={200} height={200} />
				<div>
					<h2>{this.props.name}</h2>
					<p>{this.props.email}</p>
				</div>
			</div>
		);
	}
}

export default Robo;