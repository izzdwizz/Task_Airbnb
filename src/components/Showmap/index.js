import React from 'react';
import classes from './style.module.css';
import { HiMap } from 'react-icons/hi';
import up from './svg-path (5).svg';
function ShowMap() {
	return (
		<div className={classes.showHolder}>
			<div className={classes.showmap}>
				Show map
				{/* <HiMap /> */}
				<img
					src={up}
					alt='up'
					style={{
						height: '16px',
						width: '16px',
					}}
				/>
			</div>
		</div>
	);
}

export default ShowMap;
