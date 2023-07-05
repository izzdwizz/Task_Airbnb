import * as React from 'react';
import Button from '@mui/material/Button';
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
						marginTop: '0.1rem',
						borderRadius: '1rem',
						boxShadow: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
					},
				}}
			>
				<MenuItem className={classes.airmenuItems} onClick={handleClose}>
					Signup
				</MenuItem>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Login
				</MenuItem>
				<div
					style={{
						height: '1px',
						backgroundColor: 'var(--grey)',
						width: '100%',
					}}
				/>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Airbnb Your Home
				</MenuItem>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Host an experience
				</MenuItem>
				<MenuItem onClick={handleClose} className={classes.airmenuItems}>
					Help
				</MenuItem>
			</Menu>
		</div>
	);
}
