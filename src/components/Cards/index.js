import React, { useEffect } from 'react';
import classes from './style.module.css';
import Card from './card';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Cards({ list }) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div
			className={classes.cards_flex}
			data-aos='fade-right'
			data-aos-duration='2000'
		>
			{list.map((card, i) => (
				<Card card={card} key={i} className={classes.card_overall} />
			))}
		</div>
	);
}

export default Cards;
