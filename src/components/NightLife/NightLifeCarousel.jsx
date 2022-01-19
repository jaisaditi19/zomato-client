import React,{useState} from 'react';

import Slider from 'react-slick';
import PictureCarouselCard from '../PictureCarouselCard';
import {NextArrow, PrevArrow} from '../CarouselArrow'

function NightLifeCarousel() {
    const settings = {
        dots:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide:0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    };

    const [nightLife] = useState([
      {
        image:"https://b.zmtcdn.com/data/collections/bb6a35086c983af31c536a3cfe886f1b_1631616165.jpg?output-format=webp",
        title:"Microbreweries",
        places:"19 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg?output-format=webp",
        title:"Where's the Party?",
        places:"30 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg?output-format=webp",
        title:"Bar-Gain",
        places:"19 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735044.png",
        title:"Trending this week",
        places:"30 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/821a4a7a6a0f8c265f5bf804cf18dfa3_1631714127.jpg",
        title:"Great Cafes",
        places:"50 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/534d15b97ec6a18a13d41d92f7a3c4f4_1631615781.jpg",
        title:"Taste of South",
        places:"15 Places",
      }
    ]);
    return (
        <div className='w-full'>
            <Slider {...settings}>
              {nightLife.map((nightLife,index)=>(
                <PictureCarouselCard {...nightLife} key={index}/>
              ))}
                
            </Slider>
            
        </div>
    )
}

export default NightLifeCarousel
