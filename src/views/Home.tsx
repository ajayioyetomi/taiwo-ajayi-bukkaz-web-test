import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Button, Recommended } from '../components';

import PostiveStar from '../assets/p-star-icon.svg?react';
import NegativeStar from '../assets/n-star-icon.svg?react';


type SlideType = {
  id: string;
  poster:string;
  video: string;
  rating: string,
  title:string,
  time: string,
  duration: string;
  genres: string[],
  intro: string;
  creator_name:string;
  creator_avatar: string;
  review_rating:number,
  review_total:number,
}

const positive_rating = [1, 2, 3, 4, 5];
const negative_rating = [1, 2, 3, 4, 5];

const slides: SlideType[] = [
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating: "PG",
    title:"Black Adam",
    time: "2025",
    duration:"1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.`,
    creator_name:"Segun Adeleke",
    creator_avatar:"/assets/creator.webp",
    review_rating:4,
    review_total: 223,
  },
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating:"PG",
    title:"Black Adam",
    time: "2025",
    duration: "1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.`,
    creator_name:"Taiwo Ajayi",
    creator_avatar:"/assets/creator.webp",
    review_rating:4,
    review_total: 1023,
  },
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating: "PG",
    title:"Black Adam",
    time: "2025",
    duration:"1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt eaque illum id neque commodi obcaecati quasi perferendis. Alias, facilis explicabo. Ut, accusantium consectetur! Est veritatis sint tenetur error expedita!`,
    creator_name:"Moses Ibrahim",
    creator_avatar:"/assets/creator.webp",
    review_rating:4,
    review_total: 93,
  },
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating:"PG",
    title:"Black Adam",
    time: "2025",
    duration: "1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt eaque illum id neque commodi obcaecati quasi perferendis. Alias, facilis explicabo. Ut, accusantium consectetur! Est veritatis sint tenetur error expedita!`,
    creator_name:"Odjeva OgheneEjiro",
    creator_avatar:"/assets/creator.webp",
    review_rating:3,
    review_total: 523,
  },
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating: "PG",
    title:"Black Adam",
    time: "2025",
    duration:"1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.`,
    creator_name:"Ojieh Joshua",
    creator_avatar:"/assets/creator.webp",
    review_rating:1,
    review_total: 842,
  },
  {
    id:crypto.randomUUID(),
    poster: "/assets/slide-1-a.webp",
    video: "/assets/slide-1-b.webp",
    rating:"PG",
    title:"Black Adam",
    time: "2025",
    duration: "1h 33m",
    genres:["Acive","Sci-Fi","Triller"],
    intro:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt eaque illum id neque commodi obcaecati quasi perferendis. Alias, facilis explicabo. Ut, accusantium consectetur! Est veritatis sint tenetur error expedita!`,
    creator_name:"Ojo Adediran",
    creator_avatar:"/assets/creator.webp",
    review_rating:5,
    review_total: 423,
  }
]



const Home = () => {
  return (
    <>
    <div className='zoom-in-out'>
      <section>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{delay:3000,disableOnInteraction:true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className='banner-swiper'
        >
          {
            slides.map((eachSlide: SlideType) =>
              <SwiperSlide key={eachSlide.id}>
                <div className='h-auto flex content-stretch mb-8'>
                  <div className=''>
                    <img className='h-full object-cover object-center' src={eachSlide.poster} alt="Poster" />
                  </div>
                  <div className='flex-1 relative w-full'>
                    <img className='w-full h-full object-cover object-center' src={eachSlide.video} alt="Video" />
                    <div className='absolute z-10 w-full h-full bottom-0 py-5 px-8 flex items-end gap-4' >
                      <div className='flex flex-col gap-2 w-full'>
                        <div className='flex gap-4 items-center mb-4'>
                          <p className='text-white text-5xl font-semibold leading-none'>{eachSlide.title}</p>
                          <span className='flex text-md w-8 h-8 justify-center items-center rate-gradient  rounded-sm text-gray-500 text-sm'>
                            {eachSlide.rating}
                          </span>
                        </div>
                        <p className='text-gray-600 text-sm'>
                          {eachSlide.time} {eachSlide.duration}
                        </p>
                        <ul className='banner-genre-list text-gray-600 list-none flex w-fit gap-2 text-sm'>
                          {eachSlide.genres.map((eachGenre:string) =>
                            <li className='flex relative gap-2'>{eachGenre}</li>
                            )}
                        </ul>
                        <div className='flex items-center'>
                          <ul className='flex m-0'>
                            {positive_rating.map(()=>
                            <li><PostiveStar /></li>
                            ).slice(5 - eachSlide.review_rating)}
                          </ul>
                          <ul className='flex m-0'>
                            {positive_rating.map(()=>
                            <li><NegativeStar /></li>
                            ).slice(eachSlide.review_rating)}
                          </ul>
                          <p className='m-0 ml-1 text-gray-600 text-xs'>({eachSlide.review_total})</p>
                        </div>
                        <p className='text-gray-600 max-w-140 leading-5.5'>{eachSlide.intro}</p>
                        <div className='flex gap-4 my-1 w-full'>
                          <Button className='bg-white rounded-4xl px-5 py-1.5'>
                            <span className='bg-white gradient bg-clip-text text-transparent font-semibold'>Buy Now</span>
                          </Button>
                          <Button className='bg-transparent rounded-4xl px-5 py-1.5 border border-white border-solid'>More Info</Button>
                          <div className='ml-auto'>
                            <p>Movie from:</p>
                            <div className="flex gap-2 items-center">
                              <img src={eachSlide.creator_avatar} alt="Creator Avatar" />
                              <p>{eachSlide.creator_name}</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
            
          }
        </Swiper>
      </section>
      <Recommended />
    </div>
    </>
  )
}

export default Home