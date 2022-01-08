import React from 'react';
import Robo from './robo.js';


const CardList = ({ robots }) => {
	const cardArray = robots.map((user,i) => {
		return (
			<Robo 
				key={robots[i].id} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		);
	})
	return (
		<div>
			{cardArray}
		</div>
	);
}

export default CardList;