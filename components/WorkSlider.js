// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          id: 'project1',
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          id: 'project2',
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          id: 'project3',
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          id: 'project4',
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          id: 'project5',
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          id: 'project6',
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          id: 'project7',
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          id: 'project8',
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
    {
      images: [
        {
          id: 'project9',
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          id: 'project10',
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          id: 'project11',
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          id: 'project12',
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//importing swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import {Pagination} from 'swiper';

//icons
import {BsArrowRight} from 'react-icons/bs';
import Image from 'next/image';
// data
const WorkSlider = () => {
  // Map image IDs to repository URLs
  const imageIdToUrlMap = {
    project1: 'https://github.com/markcastor/todoist-tum',
    project2: 'https://github.com/markcastor/ecommerce-app',
    project3: 'https://github.com/markcastor/Machine-Learning-Deeplearning',
    project4: 'https://github.com/markcastor/Quantum-Computing',
    project5: 'https://github.com/markcastor/code-translator',
    project6: 'https://github.com/markcastor/eccomerce10',
    project7: 'https://github.com/markcastor/Simple-.ASP-Login-Form',
    project8: 'https://github.com/markcastor/Machine-Learning-Deeplearning/blob/main/Credit_Score_Classification_Random_forest.ipynb',
    project9: 'https://github.com/markcastor/Machine-Learning-Deeplearning/blob/main/Taitanic_Analysis.ipynb',
    project10: 'https://github.com/markcastor/Machine-Learning-Deeplearning/blob/main/Weather_Forecasting.ipynb',
    project11: 'https://github.com/markcastor/Machine-Learning-Deeplearning/blob/main/torch_examples.ipynb',
    project12: 'https://github.com/markcastor/Machine-Learning-Deeplearning/blob/main/COVID_19_Test_Results_Random_Forest_Classification_given_the_CarbonHealth_and_BraidHealth_Data.ipynb',

    // ... add more mappings for other image IDs
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.slice(0, Object.keys(imageIdToUrlMap).length).map((image, imageIndex) => {
              const repositoryUrl = imageIdToUrlMap[image.id];

              return (
                <div
                  className='relative rounded-lg overflow-hidden flex justify-center items-center group'
                  key={imageIndex}
                >
                  <a
                    href={repositoryUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center relative overflow-hidden group'
                  >
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='' />
                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title*/}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100'>LIVE</div>
                        {/* title part 2 */}
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-145'>
                          PROJECT
                        </div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;