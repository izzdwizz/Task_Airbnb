import React, { useEffect } from 'react';
import classes from './style.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsCheck } from 'react-icons/bs';
function DisplayNav() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div
			className={classes.navHolder}
			data-aos='fade-right'
			data-aos-duration='1000'
		>
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
