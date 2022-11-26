// eslint-disable-next-line no-unused-vars
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

// eslint-disable-next-line no-unused-vars
import { RatingCard } from '../components/RatingCard'

export const Carousel1 = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const SampleNextArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8 bg-gray-200 rounded-full p-1 ${
            onClick ? 'text-main' : 'text-gray-500'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    )
  }

  // eslint-disable-next-line no-unused-vars
  const SamplePrevArrow = (props) => {
    const { className, onClick } = props
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8 bg-gray-200 rounded-full p-1 ${
            onClick ? 'text-main' : 'text-gray-500'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    )
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div key={index} className="my-6">
            <RatingCard
              rating={item.rating}
              avatar={item.avatar}
              title={item.title}
              description={item.description}
              isIcon={true}
            />
          </div>
        )
      })}
    </Slider>
  )
}
