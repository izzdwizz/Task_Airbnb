import React from 'react';
import classes from './style.module.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TbExchange } from 'react-icons/tb';
function MobileSearch() {
	return (
		<div className={classes.mobileSearch}>
			<div className={classes.mobileHolder}>
				<div>
					<SearchRoundedIcon className={classes.searchIcon} />
				</div>{' '}
				<div className={classes.mobiletext}>
					<p>Any Where</p>
					<div className={classes.innertext}>
						<p> Any week</p>
						<span>·</span>
						<p>Add guests</p>
					</div>
				</div>
			</div>
			<div className={classes.filter_icon}>
				<TbExchange className={classes.searchIcon} />
			</div>
		</div>
	);
}

export default MobileSearch;
