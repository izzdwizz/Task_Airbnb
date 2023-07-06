// import React from 'react';
// import classes from './style.module.css';
// import { links } from '../../icons';
// function Filter({ selectedFilter, setSelectedFilter }) {
// 	return (
// 		<div className={classes.filter_holder}>
// 			<div className={classes.filter}>
// 				{links.map((item, i) => (
// 					<div
// 						key={i}
// 						className={`${classes.link_box} ${
// 							i == selectedFilter && `${classes.selected_box}`
// 						}`}
// 						onClick={() => {
// 							console.log('selecting key', i);
// 							setSelectedFilter(i);
// 						}}
// 					>
// 						<img src={item.imgSrc} className={classes.link_image} />
// 						<p
// 							className={`${classes.link_label} ${
// 								i == selectedFilter && `${classes.selected_label}`
// 							}`}
// 						>
// 							{item.label}
// 						</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// export default Filter;

import React, { useEffect, useRef } from 'react';
import classes from './style.module.css';
import { links } from '../../icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

function Filter({ selectedFilter, setSelectedFilter }) {
	return (
		<div className={classes.filter_holder}>
			<div>
				<Swiper
					slidesPerView={15}
					spaceBetween={15}
					loop={true}
					mousewheel={true}
					cssMode={true}
					navigation={true}
					modules={[Pagination, Navigation]}
					className={classes.filter}
				>
					{links.map((item, i) => (
						<SwiperSlide>
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Filter;
