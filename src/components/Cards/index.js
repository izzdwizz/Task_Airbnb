import React from 'react';
import classes from './style.module.css';
import Card from './card';

function Cards({ list }) {
	return (
		<div className={classes.cards_flex}>
			{list.map((card, i) => (
				<Card card={card} key={i} />
			))}
		</div>
	);
}

export default Cards;
