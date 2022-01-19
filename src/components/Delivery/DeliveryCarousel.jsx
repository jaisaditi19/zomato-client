import React from 'react';
import Slider from 'react-slick';
import DeliveryCategory from './DeliveryCategory';
import {NextArrow, PrevArrow} from '../CarouselArrow';

function DeliveryCarousel() {

    const categories = [
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
          title: "Biryani",
        },
        {
          image:
            "https://b.zmtcdn.com/data/pictures/chains/0/550/a915df22032cd899f9cab92e1bb57c8c_o2_featured_v2.jpg",
          title: "Chole Bhature",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
          title: "Chicken",
        },
        {
          image:
            "https://b.zmtcdn.com/data/pictures/chains/1/491/826fb5f019902ce4492e177d8265cb2b.jpg",
          title: "Chaat",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/31a/0f42f80bfc9d2e87442ed7677b4b831a.jpeg",
          title: "Cake",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
          title: "Rolls",
        },
        {
          image:
            "https://b.zmtcdn.com/data/pictures/chains/1/301011/9b60e87fc9c1d60fbb4c2205ccdbd5ef.jpg",
          title: "Coffee",
        },
      ];
    
      const settings = {
        className: "center",
        centerMode: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        centerPadding: "10px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
        ],
      };

    return (
        <>
           <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1> 
           <div className="lg:hidden flex gap-3 lg:gap-0 justify-between flex-wrap">
             {categories.map((food)=>(
               <DeliveryCategory {...food}/>
             ))}
           </div>
           <div className="hidden lg:block">
             <Slider {...settings}>
             {categories.map((food)=>(
               <DeliveryCategory {...food} />
             ))}
             </Slider>
           </div>
        </>
    )
}

export default DeliveryCarousel
