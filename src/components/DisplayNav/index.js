import React, { useEffect } from 'react';
import classes from './style.module.css';

import { BsCheck } from 'react-icons/bs';
function DisplayNav() {
	return (
		<div className={classes.navHolder}>
			<div className={classes.displayNav}>
				<div className={classes.totalPrice}>
					<p className={classes.text1}>Display total price</p>
					<p className={classes.text2}>Includes all fees, before taxes</p>
				</div>
				<div className={classes.display_radio}>
					{' '}
					<label class='switch'>
						<input type='checkbox' />
						<span class='slider'>
							<BsCheck className='radicon' />
						</span>
					</label>
				</div>
			</div>
		</div>
	);
}

export default DisplayNav;
