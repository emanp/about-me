import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import ImageCardComponent from './ImageCardComponent';


SwiperComponent.propTypes = {
	slides: PropTypes.arrayOf(
		PropTypes.shape({
			imgSrc: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default function SwiperComponent(props) {
	const slides = props.slides;


	return (
			<Swiper navigation={true} modules={[Navigation]} className='h-full'>
				{slides.map((slide, index) => (
					<SwiperSlide key={index} className='h-full'>
						{/* <img className="h-full"src={slide.imgSrc}></img> */}
						 <ImageCardComponent className="h-full" footerTitle={slide.title} description={slide.description} source={slide.imgSrc} alt={slide.title}/>

					</SwiperSlide>
				))}
			</Swiper>
	);
}


