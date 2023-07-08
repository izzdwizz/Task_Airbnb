import React, { useState } from 'react';
import classes from './style.module.css';
import { MdStar } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { TiHeartFullOutline } from 'react-icons/ti';

function Card({ card }) {
	const [liked, setLiked] = useState('notliked');
	const [clickCount, setClickCount] = useState(0);

	const likeClick = (liked) => {
		setClickCount((prevCount) => prevCount + 1);

		if (clickCount === 1) {
			setLiked('notliked');
			setClickCount(0);
		} else {
			setLiked('liked');
		}
	};
	return (
		<div className={classes.card_holder}>
			<Swiper
				slidesPerView={1}
				spaceBetween={3}
				loop={true}
				mousewheel={true}
				cssMode={true}
				pagination
				navigation={true}
				modules={[Pagination, Navigation]}
				className={classes.swiper_container}
			>
				{card.imgSrc.map((src, i) => (
					<SwiperSlide className={classes.img_back} key={i}>
						<img src={src} className={classes.card_image} />
						<div className={classes.card_heartoutline}>
							<TiHeartFullOutline
								className={`${classes.card_heart} ${
									liked == 'liked' ? `${classes.liked}` : ''
								}`}
								onClick={() => likeClick('liked')}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={classes.card_text}>
				<h3 className={classes.card_title}>{card.title}</h3>
				<div className={classes.card_rating}>
					<MdStar />
					<p>{card.rating}</p>
				</div>
			</div>
			<p
				style={{
					margin: 0,
					color: 'var(--fontG)',
					marginBottom: '0.5rem',
					fontSize: '0.85rem',
					fontWeight: '300',
				}}
			>
				{card.desc}
			</p>
			<p
				style={{
					margin: 0,
					color: 'var(--fontG)',
					fontSize: '0.85rem',
					fontWeight: '300',
				}}
			>
				{card.date}
			</p>
			<p
				style={{
					marginTop: '0.4rem',
					color: 'var(--black)',
					fontSize: '0.85rem',
					fontWeight: '400 ',
				}}
			>
				${card.price}
			</p>
		</div>
	);
}

export default Card;
