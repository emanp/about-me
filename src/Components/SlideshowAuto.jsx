import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import cppLogo from "../assets/svg/cpp-logo.svg"
import csharpLogo from "../assets/svg/csharp-logo.svg"
import denoLogo from "../assets/svg/deno-logo.svg"
import expressLogo from "../assets/svg/express-big.svg"
import flaskLogo from "../assets/svg/flask-logo.svg"
import githubLogo from "../assets/svg/github-big.svg"
import htmlLogo from "../assets/svg/html-logo.svg"
import javaLogo from "../assets/svg/java-logo.svg"
import javaScriptLogo from "../assets/svg/javascript-logo.svg"
import nodeLogo from "../assets/svg/node-logo.svg"
import pythonLogo from "../assets/svg/python-logo.svg"
import reactLogo from "../assets/svg/react-logo.svg"
import socketIOLogo from "../assets/svg/socketio-logo.svg"
import typeScriptLogo from "../assets/svg/typescript-logo.svg"
import viteLogo from "../assets/svg/vite-logo.svg"

export default function App() {

	return (
		<Swiper
			className="clip-path-inset"
			slidesPerView={3}
			centeredSlides={false}
			loop={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			breakpoints={{
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
			}}
			effect="slide"
			navigation={false}
			modules={[Autoplay]}
		>
			{/* Swiper Slides */}
			{[
				{ logo: reactLogo, name: "React" },
				{ logo: cppLogo, name: "C/C++" },
				{ logo: csharpLogo, name: "C#" },
				{ logo: denoLogo, name: "Deno" },
				{ logo: expressLogo, name: "Express.js" },
				{ logo: flaskLogo, name: "Flask" },
				{ logo: githubLogo, name: "GitHub" },
				{ logo: htmlLogo, name: "HTML" },
				{ logo: javaLogo, name: "Java" },
				{ logo: javaScriptLogo, name: "JavaScript" },
				{ logo: nodeLogo, name: "Node.js" },
				{ logo: pythonLogo, name: "Python" },
				{ logo: socketIOLogo, name: "Socket.IO" },
				{ logo: typeScriptLogo, name: "TypeScript" },
				{ logo: viteLogo, name: "Vite" },
			].map((item, index) => (
			<SwiperSlide key={index}>
				<div className="flex flex-col text-center">
					<div className='text-start'>
						<img
							src={item.logo}
							alt={`${item.name} Logo`}
							className="rounded-lg w-16 h-16 md:w-24 md:h-24"
						/>
						<div> <p className="text-center w-26 md:w-24 text-sm md:text-base">{item.name}</p> </div>
						
					</div>
				</div>
			</SwiperSlide>
			))}
		</Swiper>
	);
}
