import React from 'react';
import classes from './style.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import choices from './Screenshot 2023-07-07 181740.jpg';

function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.footer_content}>
				<div className={classes.footer_col}>
					<p> &copy; 2023 Airbnb, Inc. ·</p>
					<p>Terms</p>
					<p>Sitemap</p>
					<p>Privacy</p>
					<p>
						Your Privacy Choices{' '}
						<span className={classes.footer_choices}>
							<img src={choices} alt='' />
						</span>
					</p>
					<p>Destinations</p>
				</div>
				<div className={classes.footer_col}>
					<div className={classes.footer_globe}>
						<LanguageIcon sx={{ fontSize: '1.3rem', fontWeight: '300' }} />

						<p>English (US)</p>
					</div>

					<p className={classes.footer_dollar}>
						<span>$</span> <span>USD</span>
					</p>
					<p>
						Support & Resources <span></span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
