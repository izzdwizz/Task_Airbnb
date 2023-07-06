import React from 'react';
import classes from './style.module.css';
import { links } from '../../icons';
function Filter({ selectedFilter, setSelectedFilter }) {
	return (
		<div className={classes.filter_holder}>
			<div className={classes.filter}>
				{links.map((item, i) => (
					<div
						key={i}
						className={`${classes.link_box} ${
							i == selectedFilter && `${classes.selected_box}`
						}`}
						onClick={() => {
							console.log('selecting key', i);
							setSelectedFilter(i);
						}}
					>
						<img src={item.imgSrc} className={classes.link_image} />
						<p
							className={`${classes.link_label} ${
								i == selectedFilter && `${classes.selected_label}`
							}`}
						>
							{item.label}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Filter;
