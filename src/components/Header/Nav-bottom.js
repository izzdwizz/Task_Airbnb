import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './style.module.css';
export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);

	return (
		<div className={classes.airbottom_nav}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
				<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
			</BottomNavigation>
		</div>
	);
}