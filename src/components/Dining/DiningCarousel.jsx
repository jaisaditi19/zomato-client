import React,{useState} from 'react';

import Slider from 'react-slick';
import PictureCarouselCard from '../PictureCarouselCard';
import {NextArrow, PrevArrow} from '../CarouselArrow'

function DiningCarousel() {
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
        image:"https://b.zmtcdn.com/data/collections/c392056cfd7c02befe8d53f94ad2a908_1581933619.jpg?output-format=webp",
        title:"Best of Delhi NCR",
        places:"150 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/3d0913308e51f5c6b0483e2cdebb2e46_1631607936.jpg",
        title:"In Pizza We Crust",
        places:"20 Places",
      },
      {
        image:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015804.jpg",
        title:"Newly opened",
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

export default DiningCarousel
