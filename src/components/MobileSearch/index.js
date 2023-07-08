import React from 'react';
import classes from './style.module.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { TbExchange } from 'react-icons/tb';
import filterIcon from '../Filter/svg-path.svg';
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
				{/* <TbExchange className={classes.searchIcon} /> */}
				<img
					src={filterIcon}
					style={{ height: '16px', width: '16px' }}
					alt='icon'
				/>
			</div>
		</div>
	);
}

export default MobileSearch;
