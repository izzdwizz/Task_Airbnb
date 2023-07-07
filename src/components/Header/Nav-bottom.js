import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import classes from './style.module.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
				<BottomNavigationAction label='Recents' icon={<SearchOutlinedIcon />} />
				<BottomNavigationAction
					label='Favorites'
					icon={<FavoriteBorderOutlinedIcon />}
				/>
				<BottomNavigationAction
					label='Login'
					icon={<AccountCircleOutlinedIcon />}
				/>
			</BottomNavigation>
		</div>
	);
}
