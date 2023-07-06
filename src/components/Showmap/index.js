import React from 'react';
import classes from './style.module.css';
import { HiMap } from 'react-icons/hi';
function ShowMap() {
	return (
		<div className={classes.showHolder}>
			<div className={classes.showmap}>
				ShowMap <HiMap />
			</div>
		</div>
	);
}

export default ShowMap;
