import React from 'react';
import classes from './style.module.css';
import item1 from '../../assets/hotels/pexels-guy-16470651.jpg';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

function Card({ card }) {
	return (
		<div className={classes.card_holder}>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				mousewheel={true}
				cssMode={true}
				pagination
				navigation={true}
				modules={[Pagination, Navigation]}
				className={classes.swiper_container}
			>
				{card.imgSrc.map((src, i) => (
					<SwiperSlide key={i}>
						<img src={src} className={classes.card_image} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.card_text}>
				<h3 className={classes.card_title}>{card.title}</h3>
				<div className={classes.card_rating}>
					<StarRateRoundedIcon />
					<p>{card.rating}</p>
				</div>
			</div>
			<p style={{ margin: 0, color: 'var(--fontG)', marginBottom: '0.5rem' }}>
				{card.desc}
			</p>
			<p style={{ margin: 0, color: 'var(--fontG)' }}>{card.date}</p>
			<p style={{ margin: 0, color: 'var(--black)' }}>
				<strong>${card.price}</strong>
			</p>
		</div>
	);
}

export default Card;
