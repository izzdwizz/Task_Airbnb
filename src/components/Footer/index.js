import React from 'react';
import classes from './style.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import choices from './Screenshot 2023-07-07 181740.jpg';
import up from './svg-path (4).svg';
function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.footer_content}>
				<div className={classes.footer_col}>
					<p> &copy; 2023 Airbnb, Inc. </p>
					<span style={{ fontSize: '1.5rem' }}>·</span>
					<p>Terms</p>
					<span style={{ fontSize: '1.5rem' }}>·</span>
					<p>Sitemap</p>
					<span style={{ fontSize: '1.5rem' }}>·</span>
					<p>Privacy</p>
					<span style={{ fontSize: '1.5rem' }}>·</span>
					<p>
						Your Privacy Choices{' '}
						<span className={classes.footer_choices}>
							<img src={choices} alt='' />
						</span>
					</p>
					<span style={{ fontSize: '1.5rem' }}>·</span>
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
					<p
						style={{
							display: 'flex',
							justifyContent: 'center',

							gap: '0.4rem',
						}}
					>
						Support & Resources{' '}
						<span>
							<img
								src={up}
								alt='up'
								style={{
									height: '16px',
									width: '16px',
									position: 'relative',
									top: '3%',
								}}
							/>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
