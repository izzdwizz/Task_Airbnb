import React from 'react';
import classes from './style.module.css';
import logo from '../../assets/logo/long-logo.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import ProfileMenu from './ProfileMenu';
import SimpleBottomNavigation from './Nav-bottom';
import MobileSearch from '../MobileSearch';
function Header() {
	return (
		<div className={classes.navbar}>
			<img src={logo} alt='logo' className={classes.navbar_logo} />
			<div className={classes.searchBar}>
				<div className={classes.searchbartext}>Any Where</div>
				<div className={classes.searchbartext}>Any Week</div>
				<div className={classes.searchbartext2}>Add Guests</div>
				<div className={classes.searchIcondiv}>
					<SearchRoundedIcon className={classes.searchIcon} />
				</div>
			</div>

			<div className={classes.airprofile}>
				<div className={classes.airhome}>Airbnb your home</div>
				<div className={classes.airglobe}>
					{' '}
					<LanguageIcon sx={{ fontSize: '1.3rem' }} />
				</div>
				<div className={classes.airprofile}>
					<ProfileMenu />
				</div>
			</div>
			<MobileSearch />
			<SimpleBottomNavigation />
		</div>
	);
}

export default Header;
