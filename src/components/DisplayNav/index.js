import React from 'react';
import classes from './style.module.css';
import Switch from '@mui/material/Switch';
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
					<Switch className={classes.switch} defaultUnChecked color='default' />
				</div>
			</div>
		</div>
	);
}

export default DisplayNav;
