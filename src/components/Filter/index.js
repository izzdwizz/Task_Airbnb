import React, { useState } from 'react';
import classes from './style.module.css';
import { links } from '../../icons';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { TbExchange } from 'react-icons/tb';
import filterIcon from './svg-path.svg';
function Filter({ selectedFilter, setSelectedFilter }) {
	const [scrollClick, setScrollClick] = useState(false);
	const scrollRef = React.useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.style.transitionDuration = '0.3s';
			current.scrollLeft += 300;
		}
	};

	return (
		<div className={classes.filter_container}>
			<div className={classes.filter_holder}>
				<div className={classes.filter_separator}>
					<div
						className={`${
							!scrollClick
								? `${classes.filter_leftArrow_none}`
								: `${classes.filter_rightArrow}`
						}`}
						onClick={() => {
							scroll('left');
						}}
					>
						<MdOutlineKeyboardArrowLeft className='gallery__arrow-icon' />
					</div>

					<div className={classes.filter} ref={scrollRef}>
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
					<div
						className={classes.filter_leftArrow}
						onClick={() => {
							scroll('right');
							setScrollClick(true);
						}}
					>
						<MdOutlineKeyboardArrowRight className='gallery__arrow-icon' />
					</div>
					<div className={classes.filter_button}>
						{' '}
						<span className={classes.filter_button_icon}>
							{/* <TbExchange />{' '} */}
							<img
								src={filterIcon}
								style={{ height: '16px', width: '16px' }}
								alt='icon'
							/>
						</span>{' '}
						Filters{' '}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;

// import React, { useEffect, useRef } from 'react';
// import classes from './style.module.css';
// import { links } from '../../icons';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper';
// import { TbExchange } from 'react-icons/tb';
// function Filter({ selectedFilter, setSelectedFilter }) {
// 	return (
// 		<div className={classes.filter_holder}>
// 			<div className={classes.filter_separator}>
// 				<Swiper
// 					slidesPerView={15}
// 					spaceBetween={15}
// 					loop={true}
// 					mousewheel={true}
// 					cssMode={true}
// 					navigation={true}
// 					modules={[Pagination, Navigation]}
// 					className={classes.filter}
// 				>
// 					{links.map((item, i) => (
// 						<SwiperSlide>
// 							<div
// 								key={i}
// 								className={`${classes.link_box} ${
// 									i == selectedFilter && `${classes.selected_box}`
// 								}`}
// 								onClick={() => {
// 									console.log('selecting key', i);
// 									setSelectedFilter(i);
// 								}}
// 							>
// 								<img src={item.imgSrc} className={classes.link_image} />
// 								<p
// 									className={`${classes.link_label} ${
// 										i == selectedFilter && `${classes.selected_label}`
// 									}`}
// 								>
// 									{item.label}
// 								</p>
// 							</div>
// 						</SwiperSlide>
// 					))}
// 				</Swiper>
// 				<div className={classes.filter_button}>
// 					<span className={classes.filter_button_icon}>
// 						<TbExchange />
// 					</span>{' '}
// 					Filters
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Filter;
