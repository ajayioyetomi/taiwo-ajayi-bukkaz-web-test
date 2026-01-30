// import Swiper core and required modules
import { useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import Button from './Button';
import NextIcon from '../assets/next-icon.svg?react';
// Import Swiper styles
import 'swiper/css';

type RecommendedType = {
	id:string;
	image:string;
	title:string;
}

const recommendationList = [
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-1.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-2.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-3.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-4.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-5.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-1.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-3.webp",
			title:"title"
	},
	{
			id: crypto.randomUUID(),
			image: "/assets/frame-4.webp",
			title:"title"
	}
]

const Recommended = () => {
	const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className='flex flex-col items-center justify-center w-screen mt-4 mb-10'>
			<div className='w-[calc(100dvw - 100px)] grow-0 inner-div'>
				<div className='flex items-center justify-between'>
					<h1 className='mb-4 font-bold text-white text-2xl'>
							Recommended <span className='bg-white gradient bg-clip-text text-transparent font-bold'>for you</span>
					</h1>
					<Button onClick={() => swiperRef.current?.slideNext()}>
						<NextIcon />
					</Button>
				</div>
				
				<div className='recommended-div'>
						<Swiper
								// install Swiper modules
								modules={[]}
								spaceBetween={30}
								slidesPerView={5}
								loop
								navigation
								onSwiper={(swiper) => (swiperRef.current = swiper)}
								onSlideChange={() => console.log('slide change')}
								className='overflow-visible'
								>
								{recommendationList.map((eachRecommendation: RecommendedType) =>
										<SwiperSlide key={eachRecommendation.id}>
												<div className='flex center'>
														<img className=' w-full h-full object-cover object-center' src={eachRecommendation.image} alt={eachRecommendation.title} />

												</div>
										</SwiperSlide>
								)}
								
						</Swiper>
				</div>
			</div>
    </section>
  )
}

export default Recommended