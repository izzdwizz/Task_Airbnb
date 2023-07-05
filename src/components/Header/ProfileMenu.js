import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import classes from './style.module.css';

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<div
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				className={classes.airprofileMenu}
			>
				<MenuRoundedIcon />
				<AccountCircleRoundedIcon />
			</div>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
				sx={{
					'.MuiPaper-root': {
						minWidth: '200px',
						marginTop: '0.5rem',
						borderRadius: '1rem',
						fontWeight: '700',
						boxShadow:
							'0px 0px 4px rgba(89,89,89,.0654574), 0 20.1753px 27.9204px rgba(89,89,89,.0572737), 0 6.13165px 15.6519px rgba(89,89,89,.0464559), 0 -1.08328px 8.31263px rgba(89,89,89,.033453)',
					},
				}}
			>
				<MenuItem className={classes.airmenuItems} onClick={handleClose}>
					Sign Up
				</MenuItem>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Login
				</MenuItem>
				<div
					style={{
						height: '1.6px',
						backgroundColor: 'var(--grey)',
						width: '100%',
						margin: '0.5rem 0',
					}}
				/>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Airbnb Your Home
				</MenuItem>

				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Help
				</MenuItem>
			</Menu>
		</div>
	);
}
